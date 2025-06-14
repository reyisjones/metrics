#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've successfully connected to the Tauri backend! 🦀", name)
}

#[tauri::command]
fn get_app_info() -> serde_json::Value {
    serde_json::json!({
        "name": "Tauri Metrics",
        "version": "0.1.0",
        "description": "A modern desktop application template built with Tauri, React, and TypeScript",
        "framework": "Tauri + React + TypeScript",
        "ui_library": "Storybook + Styled Components"
    })
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, get_app_info])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
