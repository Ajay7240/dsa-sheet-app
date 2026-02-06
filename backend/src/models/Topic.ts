import mongoose, {Schema, Document} from "mongoose";
import { title } from "node:process";

export interface ITopic extends Document{
    title: string;
    description: string;
}

const TopicSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String}
    },
    {timestamps: true}
);

export default mongoose.model<ITopic>("Topic", TopicSchema);