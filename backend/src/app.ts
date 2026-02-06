import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import topicRoutes from "./routes/topic.routes";
import problemRoutes from "./routes/problem.routes";
import progressRoutes from "./routes/progress.routes";


const app = express();

//Middleware

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/progress", progressRoutes);

//Health check

app.get("/", (_req, res) => {
    res.send("DSA Sheet Backend is running");
});


export default app;