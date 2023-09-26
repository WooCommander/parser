import express from "express";
import serverRoters from "./routers/routers.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

let PORT = process.env.PORT ?? 3000;
app.use(express.static(path.resolve(__dirname, "static")));

app.use(serverRoters);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
});
