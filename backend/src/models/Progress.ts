import mongoose, { Schema, Document, mongo} from "mongoose";

export interface IProgress extends Document {
    userId: mongoose.Types.ObjectId;
    problemId: mongoose.Types.ObjectId;
    completed: boolean;
}

const ProgressSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        problemId: {
            type: Schema.Types.ObjectId,
            ref: "Problem",
            required: true
        },

        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

ProgressSchema.index({ userId: 1, problemId: 1}, {unique: true});

export default mongoose.model<IProgress>("Progress", ProgressSchema);