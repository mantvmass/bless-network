pub mod network;

use anyhow::Result;
use chrono::Local;
use colored::*;
use dashmap::DashMap;
use figlet_rs::FIGfont;
use reqwest::{Client, Proxy};
use serde::{Deserialize, Serialize};
use std::{env, fs, sync::Arc, time::Duration};
use tokio::{signal, time};

const MAX_PING_ERRORS: u32 = 3;
const PING_INTERVAL: Duration = Duration::from_secs(120);
const RESTART_DELAY: Duration = Duration::from_secs(240);

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Config {
    token: String,
    proxy: Option<String>,
}

struct AppState {
    active_nodes: DashMap<String, network::Bless>, // เก็บ pub_key และ bless ที่ต่างกันในแต่ละโหนด
}

// ฟังก์ชันสำหรับประมวลผล node
async fn process_node(
    state: Arc<AppState>,
    bless: network::Bless,
    node: network::Node,
    addr: Option<String>,
) {
    let pub_key = node.pub_key.clone();

    // ลูปสำหรับ process node
    loop {
        if state.active_nodes.contains_key(&pub_key) {
            println!(
                "[{}] Node {} is already being processed.",
                Local::now(),
                &pub_key
            );
            return;
        }

        state.active_nodes.insert(pub_key.clone(), bless.clone());

        match async {
            bless.register(&pub_key, &node.hardware_id, addr.as_deref()).await?;
            bless.init_session(&pub_key).await?;
            // bless.ping(&pub_key, addr.as_deref()).await?; // init ping

            let pub_key = pub_key.clone();
            let addr = addr.clone();
            let bless = bless.clone(); // Clone `bless` for each spawned task

            // Spawn task สำหรับ ping
            tokio::spawn(async move {
                let mut ping_error_count = 0;
                loop {
                    match bless.ping(&pub_key, addr.as_deref()).await {
                        Ok(_) => {
                            ping_error_count = 0;
                        }
                        Err(e) => {
                            println!("[{}] Error during ping: {}", Local::now(), e);
                            ping_error_count += 1;
                            if ping_error_count >= MAX_PING_ERRORS {
                                println!(
                                    "[{}] Ping failed {} times consecutively for nodeId: {}. Restarting process...",
                                    Local::now(),
                                    MAX_PING_ERRORS,
                                    pub_key
                                );
                                break;
                            }
                        }
                    }
                    time::sleep(PING_INTERVAL).await;
                }
            });

            Ok::<(), anyhow::Error>(())
        }
        .await
        {
            Ok(_) => break,
            Err(e) => {
                println!(
                    "[{}] Error occurred for nodeId: {}, restarting process in {} seconds: {}",
                    Local::now(),
                    node.pub_key,
                    RESTART_DELAY.as_secs(),
                    e
                );
                time::sleep(RESTART_DELAY).await;
            }
        }

        state.active_nodes.remove(&node.pub_key);
    }
}

fn display() {
    let standard_font = FIGfont::standard().unwrap();
    let banner = standard_font.convert("Bless Network").unwrap();
    println!("{}", banner.to_string().bold().blue());

    println!("{}", " Version: 0.1.0".italic().yellow());
    println!(
        "{}",
        " Make by: mantvmass (https://github.com/mantvmass)"
            .italic()
            .green()
    );
    println!(
        "{}",
        " Contact: https://facebook.com/mantvmass".italic().red()
    );
}

// ฟังก์ชันสำหรับหยุด session ของทุกโหนด
async fn shutdown(state: Arc<AppState>) {
    println!("[{}] Shutting down... Cleaning up sessions.", Local::now());
    for entry in state.active_nodes.iter() {
        let pub_key = entry.key();
        let bless = entry.value();
        if let Err(e) = bless.stop_session(pub_key).await {
            println!(
                "[{}] Failed to stop session for node {}: {}",
                Local::now(),
                pub_key,
                e
            );
        } else {
            println!("[{}] Session stopped for node {}", Local::now(), pub_key);
        }
    }
}

#[tokio::main]
async fn main() -> Result<()> {

    #[cfg(debug_assertions)] {
        println!("Running in debug mode!");
    }

    display();

    // รับค่า argument จาก command line
    let args: Vec<String> = env::args().collect();

    // ตรวจสอบว่ามี argument "--init" และไฟล์ config
    if args.len() < 3 || args[1] != "--init" {
        eprintln!(" Usage: bless-network.exe --init <json_config_file>");
        std::process::exit(1);
    }

    let config_file = &args[2];

    // โหลด config จากไฟล์
    let config_data = fs::read_to_string(config_file).expect("Failed to read the config file");

    let config: Vec<Config> =
        serde_json::from_str(&config_data).expect("Failed to parse config file");

    // สร้าง state สำหรับจัดการ active_nodes
    let state = Arc::new(AppState {
        active_nodes: DashMap::new(),
    });

    for user in config {
        let client = Client::builder();
        let client = if let Some(proxy_url) = &user.proxy {
            let proxy = if proxy_url.starts_with("socks") {
                Proxy::all(proxy_url)?
            } else {
                let proxy_url = if proxy_url.starts_with("http") {
                    proxy_url.to_string()
                } else {
                    format!("http://{}", proxy_url)
                };
                Proxy::http(&proxy_url)?
            };
            client.proxy(proxy)
        } else {
            client
        }
        .build()?;

        let addr = if user.proxy.is_some() {
            Some(bless_network::what_my_addr(&client).await?)
        } else {
            None
        };

        let bless = network::Bless::new(client, user.token);

        let nodes = match bless.nodes().await {
            Ok(nodes) => nodes,
            Err(err) => {
                panic!("Error fetching nodes: {}", err);
            }
        };

        for node in nodes {
            let is_proxy_mode = if let Some(addr_value) = &addr {
                format!("ON/{}", addr_value).green().to_string()
            } else {
                "OFF".red().to_string()
            };
            let msg = "init".yellow();
            println!(
                "[{}] {} {}, proxy mode [{}]",
                Local::now(),
                msg,
                node.pub_key,
                is_proxy_mode
            );

            tokio::spawn(process_node(Arc::clone(&state), bless.clone(), node, addr.clone()));
        }
    }

    // สำหรับจัดการการ shutdown
    // Task สำหรับรับสัญญาณ CTRL + C
    signal::ctrl_c().await.expect("Failed to listen for Ctrl+C");
    shutdown(state).await;

    println!("Graceful shutdown completed.");
    Ok(())
}