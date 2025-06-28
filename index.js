import { userRouter } from "./routes/user";
import { courseRouter } from "./routes/course";
const express=require("express");
const app=express();

app.use(express.json());

app.use("/user",userRouter);
app.use("/course",courseRouter);



app.listen(3000);