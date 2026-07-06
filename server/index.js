import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';

const app = express();
app.use(cors({
    origin:"https://interviewiq-ai-client-ptxe.onrender.com",
    credentials: true
}))

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
    connectDB();
})
