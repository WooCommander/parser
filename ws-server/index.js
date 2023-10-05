import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  },
});

wss.on("connection", (ws) => {
  console.log("Новый клиент подключен");

  // Отправляем приветственное сообщение клиенту при подключении
  ws.send("Добро пожаловать! Вы подключены!");

  // Обрабатываем сообщения от клиента
  ws.on("message", (data) => {
    console.log(`Клиент прислал: ${data}`);
  });

  // Обработка закрытия соединения клиента
  ws.on("close", () => {
    console.log("Клиент отключился");
  });

  // Обработка ошибок соединения
  ws.on("error", (error) => {
    console.error("Произошла ошибка:", error);
  });
});
