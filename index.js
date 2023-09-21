import express from "express";
import serverRoters from "./routers/routers.js";
import { patch } from "request";

const app = express();

let PORT = process.env.PORT ?? 3000;
app.use(express.static(patch.resolve(__dirname, "static")));

app.use(serverRoters);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
});
