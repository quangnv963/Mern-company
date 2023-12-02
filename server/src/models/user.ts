import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user";
const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: {
            type: Schema.Types.String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: ["admin", "member"],
            default: "member",
        },
    },
    {versionKey: false }
);
export default mongoose.model("User", userSchema);
