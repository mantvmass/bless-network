use anyhow::{Context, Result};
use chrono::Local;
use colored::*;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use std::collections::HashMap; // สำหรับการทำให้ข้อความเป็นสี

#[derive(Debug, Serialize, Deserialize)]
pub struct ApiResponse {
    status: Option<String>,
}

#[derive(Deserialize, Debug, Clone)]
pub struct Node {
    pub _id: String,
    #[serde(rename = "pubKey")]
    pub pub_key: String,
    #[serde(rename = "userId")]
    pub user_id: String,
    pub __v: u32,
    #[serde(rename = "createdAt")]
    pub created_at: String,
    #[serde(rename = "hardwareId")]
    pub hardware_id: String,
    #[serde(rename = "hardwareInfo")]
    pub hardware_info: Option<serde_json::Value>,
    #[serde(rename = "ipAddress")]
    pub ip_address: Option<String>,
    #[serde(rename = "updatedAt")]
    pub updated_at: String,
    pub sessions: Vec<Session>,
    #[serde(rename = "totalReward")]
    pub total_reward: u32,
    #[serde(rename = "todayReward")]
    pub today_reward: u32,
    #[serde(rename = "isConnected")]
    pub is_connected: bool,
}

#[derive(Deserialize, Debug, Clone)]
pub struct Session {
    pub _id: String,
    #[serde(rename = "nodeId")]
    pub pub_key: String,
    #[serde(rename = "startAt")]
    pub start_at: String,
    pub pings: Vec<String>,
    pub __v: u32,
}

#[derive(Clone)]
pub struct Bless {
    access_token: String,
    client: Client,
}

impl Bless {
    const API_BASE_URL: &'static str = "https://gateway-run.bls.dev/api/v1";

    pub fn new(client: Client, access_token: String) -> Self {
        Bless {
            access_token,
            client,
        }
    }

    // ฟังก์ชันสำหรับดึงข้อมูล nodes ทั้งหมด
    pub async fn nodes(&self) -> Result<Vec<Node>> {
        let url = format!("{}/nodes", Self::API_BASE_URL);

        // ส่ง request ไปยัง API
        let response = self
            .client
            .get(&url)
            .header("Authorization", format!("Bearer {}", self.access_token))
            .send()
            .await
            .context("Failed to send request to fetch nodes")?;

        // ตรวจสอบสถานะของ response ก่อนแปลง JSON
        if !response.status().is_success() {
            return Err(anyhow::anyhow!(
                "Failed to fetch nodes: HTTP {}",
                response.status()
            ));
        }

        // แปลงข้อมูลเป็น Vec<Node>
        let nodes: Vec<Node> = response
            .json()
            .await
            .context("Failed to parse nodes data")?;
        Ok(nodes)
    }

    // ฟังก์ชันสำหรับลงทะเบียน node
    pub async fn register(
        &self,
        pub_key: &str,
        hardware_id: &str,
        addr: Option<&str>,
    ) -> Result<ApiResponse> {
        let url = format!("{}/nodes/{}", Self::API_BASE_URL, pub_key);
        println!(
            "[{}] Registering node with IP: {:?}, Hardware ID: {}",
            Local::now(),
            addr,
            hardware_id
        );

        let mut body = HashMap::new();
        if let Some(ip) = addr {
            body.insert("ipAddress", ip);
        }
        body.insert("hardwareId", hardware_id);

        let response = self
            .client
            .post(&url)
            .header("Authorization", format!("Bearer {}", self.access_token))
            .json(&body)
            .send()
            .await
            .context("Failed to send registration request")?;

        // ตรวจสอบสถานะของ response ก่อนแปลง JSON
        if !response.status().is_success() {
            return Err(anyhow::anyhow!(
                "Failed to register node {}: HTTP {}",
                pub_key,
                response.status()
            ));
        }

        let data = response
            .json()
            .await
            .context("Failed to parse registration response")?;
        println!("[{}] Registration response: {:?}", Local::now(), data);
        Ok(data)
    }

    // ฟังก์ชันสำหรับเริ่ม session
    pub async fn init_session(&self, pub_key: &str) -> Result<ApiResponse> {
        let url = format!("{}/nodes/{}/start-session", Self::API_BASE_URL, pub_key);
        println!(
            "[{}] Starting session for node {}, it might take a while...",
            Local::now(),
            pub_key
        );

        let response = self
            .client
            .post(&url)
            .header("Authorization", format!("Bearer {}", self.access_token))
            .send()
            .await
            .context("Failed to start session")?;

        // ตรวจสอบสถานะของ response ก่อนแปลง JSON
        if !response.status().is_success() {
            return Err(anyhow::anyhow!(
                "Failed to start session for node {}: HTTP {}",
                pub_key,
                response.status()
            ));
        }

        let data = response
            .json()
            .await
            .context("Failed to parse session start response")?;
        println!("[{}] Start session response: {:?}", Local::now(), data);
        Ok(data)
    }

    // ฟังก์ชันสำหรับ ping node
    pub async fn ping(&self, pub_key: &str, addr: Option<&str>) -> Result<ApiResponse> {
        let ping_url = format!("{}/nodes/{}/ping", Self::API_BASE_URL, pub_key);

        println!(
            "[{}] Pinging node {} with IP: {:?}",
            Local::now(),
            pub_key,
            addr
        );

        let response = self
            .client
            .post(&ping_url)
            .header("Authorization", format!("Bearer {}", self.access_token))
            .send()
            .await
            .context("Failed to send ping request")?;

        // ตรวจสอบสถานะของ response ก่อนแปลง JSON
        if !response.status().is_success() {
            return Err(anyhow::anyhow!(
                "Ping failed for node {}: HTTP {}",
                pub_key,
                response.status()
            ));
        }

        // Read and debug the response text
        let response_text = response
            .text()
            .await
            .context("Failed to read response text")?;
        // println!("[{}] Raw response body: {}", Local::now(), response_text);

        // Deserialize the JSON
        let data: ApiResponse =
            serde_json::from_str(&response_text).context("Failed to parse ping response")?;

        // let data: ApiResponse = response
        //     .json()
        //     .await
        //     .context("Failed to parse ping response")?;

        let status_str = data.status.as_deref().unwrap_or("UNKNOWN");
        let status_colored = if status_str.to_lowercase() == "ok" {
            status_str.green()
        } else {
            status_str.red()
        };

        println!(
            "[{}] Ping response status: {}, NodeID: {}, IP: {:?}",
            Local::now(),
            status_colored,
            pub_key.cyan(),
            addr.unwrap_or("None")
        );

        Ok(data)
    }
}
