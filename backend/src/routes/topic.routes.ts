import { Router } from "express";
import { createTopic, getAllTopics } from "../controllers/topic.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createTopic);
router.get("/", authMiddleware, getAllTopics);

export default router;