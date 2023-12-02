import dotenv from "dotenv";
import express, { Express } from "express";
import morgan from "morgan";
import connectDB from "./config/database";
import cors from 'cors';
import userRouter from "./routes/user";
import newRouter from "./routes/new";
import productRouter from "./routes/product";
// import uploadRouter from "./routes/upload";
import swaggerDocs from "./utils/swagger";

const app: Express = express();

dotenv.config();

// Khởi tạo kết nối với cơ sở dữ liệu
connectDB(process.env.MONGO_URI as string);

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors())

app.use("/api", productRouter);
app.use("/api", newRouter);
// app.use("/api", uploadRouter);
app.use("/api", userRouter);


swaggerDocs(app, 3000);

export const viteNodeApp: Express = app;
