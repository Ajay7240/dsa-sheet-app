import { Request, Response } from "express";
import Progress from "../models/Progress";

// Toggle / update progress
export const updateProgress = async (req: Request, res: Response) => {
    try {
        const { problemId, completed} = req.body;
        const userId = req.userId; // from auth middleware

        const progress = await Progress.findOneAndUpdate(
            {userId, problemId},
            {completed},
            {upsert: true, new: true}
        );

        res.json(progress);
    }catch (error){
        res.status(500).json({message: "Failed to update progress"});
    }
};


// Get progress for logged-in user

export const getUserProgress = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const progress = await Progress.find({userId});
        res.json(progress);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch progress"})
    }
};