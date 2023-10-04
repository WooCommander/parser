import express from "express";
import serverRouters from "./routers/routers.js";
import path from "path";
import { fileURLToPath } from "url";
import { logger, requestTime } from "./middleware/middlewares.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

let PORT = process.env.PORT ?? 3000;
app.use(requestTime);
app.use(logger);
app.use(serverRouters);
app.use(express.static(path.resolve(__dirname, "static")));
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
});
