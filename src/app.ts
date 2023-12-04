import express from "express";
import cors from "cors";
import { connectDb } from "./config/database-connect";
import { router } from "./routes/products.routes";

export const app = express();

app.use(cors());
app.use(express.json());
connectDb();
app.use(router);