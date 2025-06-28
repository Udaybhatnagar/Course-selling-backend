
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



mongoose.connect("mongodb+srv://Uday:Uday123@cluster0.98j2hlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Course-era"); //replace with the original db link
console.log("connected to backend");
app.listen(3000);