import mongoose from "mongoose";
import { Inew } from "../interfaces/new";


const productSchema = new mongoose.Schema<Inew>({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    date:{
        type:String
    }
    
}, { versionKey: false });



export default mongoose.model<Inew>('New', productSchema);
