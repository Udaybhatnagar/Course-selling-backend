require('dotenv').config()

const express=require("express");
const app=express();
const { userRouter } =require( "./routes/user");
const { courseRouter } =require( "./routes/course");
const { adminRouter } =require( "./routes/admin");
const mongoose=require("mongoose");
app.use(express.json());

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);



mongoose.connect(process.env.Mongo_Url); //replace with the original db link
console.log("connected to backend");
app.listen(3000);