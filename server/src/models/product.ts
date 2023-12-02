import mongoose from "mongoose";
import { IProduct } from "../interfaces/product";


const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    app:{
        type:String
    }
    
}, { versionKey: false });



export default mongoose.model<IProduct>('Product', productSchema);
