import mongoose from "mongoose";
import { Schema } from "mongoose";

export const productSchema = new Schema({
    nameProduct:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

export const Product = mongoose.model("Product", productSchema);