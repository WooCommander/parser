import { Router } from "express";
import { getAll } from "../controllers/servers.js";
const __dirname = path.resolve();
import path from "path";
const router = Router();

router.get("/api/server", getAll);
router.get("/", (req, res) => {
  console.log(`req.requestTime`, req.requestTime);
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});
export default router;
