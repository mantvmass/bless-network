use anyhow::Result;
use chrono::Local;
use reqwest::Client;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct IpResponse {
    ip: String,
}

pub async fn what_my_addr(client: &Client) -> Result<String> {
    let response = client
        .get("https://tight-block-2413.txlabs.workers.dev")
        .send()
        .await?;
    let data: IpResponse = response.json().await?;
    println!("[{}] IP fetch response: {:?}", Local::now(), data);
    Ok(data.ip)
}
