import { Request, Response } from "express";
import Topic from "../models/Topic";

export const createTopic = async (req: Request, res: Response) => {
    try {
        const {title, description} = req.body;

        const topic = await Topic.create({title, description});
        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({message: "Failed to create topic"});
    }
};

export const getAllTopics = async (req: Request, res: Response) => {
    try {
        const topics = await Topic.find();
        res.json(topics);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch topics"})
    }
};