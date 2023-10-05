import WebSocket from "ws";
// const WebSocket = require("ws");

const client = new WebSocket("ws://localhost:8080");

client.on("open", () => {
  console.log("Подключено к серверу");

  // Отправить сообщение на сервер
  client.send("Привет, сервер!");
});

client.on("message", (message) => {
  console.log(`Получено сообщение от сервера: ${message}`);
});

client.on("close", () => {
  console.log("Соединение с сервером закрыто");
});
