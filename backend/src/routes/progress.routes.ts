import { Router } from "express";
import { updateProgress, getUserProgress } from "../controllers/progress.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, updateProgress);
router.get("/", authMiddleware, getUserProgress);

export default router;