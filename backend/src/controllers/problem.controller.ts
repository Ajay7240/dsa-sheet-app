import { Request, Response } from "express";
import Problem from "../models/Problem";

export const createProblem = async (req: Request, res: Response) => {
    try {
        const {
            title,
            topicId,
            difficulty,
            youtubeLink,
            codingLink,
            articleLink
        } = req.body;

        const problem = await Problem.create({
            title,
            topicId,
            difficulty,
            youtubeLink,
            codingLink,
            articleLink
        });

        res.status(201).json(problem);
    } catch (error) {
        res.status(500).json({message: "Failed to create problem"});
    }
};

export const getProblemByTopic = async (req: Request, res: Response) => {
    try {
        const {topicId} = req.params;

        const problems = await Problem.find({topicId});
        res.json(problems);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch problems"});
    }
};