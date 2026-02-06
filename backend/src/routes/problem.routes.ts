import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createProblem, getProblemByTopic } from "../controllers/problem.controller";

const router = Router();

router.post("/", authMiddleware, createProblem);
router.get("/:topicId", authMiddleware, getProblemByTopic);

export default router;