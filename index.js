import express from "express";
import path from "path";
import serverRoters from "./routers/routers";
const app = express();
const __dirname = path.resolve();
let PORT = process.env.PORT ?? 3001;
app.use(serverRoters);
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
});
