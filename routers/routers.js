import { Router } from "express";
import { getAll } from "../controllers/servers";
const router = Router();

router.get("/api/server", getAll);
export default router;
