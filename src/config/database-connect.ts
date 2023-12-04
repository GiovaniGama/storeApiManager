import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export async function connectDb(){
    try {
        await mongoose.connect(process.env.DB_URL || "");
    } catch (error) {
        throw new Error(`Error of database connect: ${error}`);   
    }
}