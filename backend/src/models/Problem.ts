import mongoose, { Schema, Document} from "mongoose";
import { ref, title } from "node:process";

export interface IProblem extends Document {
    title: string;
    topicId: mongoose.Types.ObjectId;
    difficulty: "Easy" | "Medium" | "Tough";
    youtubeLink: string;
    codingLink: string;
    articleLink: string;
}

const ProblemSchema = new Schema(
    {
        title: { 
            type: String,
            required: true
        },

        topicId: {
            type: Schema.Types.ObjectId,
            ref: "Topic",
            required: true
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Tough"],
            required: true
        },

        youtubeLink: {
            type: String
        },

        codingLink: {
            type: String
        },

        articleLink: {
            type: String
        }
    },
    {timestamps: true}
);

export default mongoose.model<IProblem>("Problem", ProblemSchema);