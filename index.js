import express from "express";
import serverRoters from "./routers/routers.js";

const app = express();

let PORT = process.env.PORT ?? 3000;
app.use(serverRoters);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
});
