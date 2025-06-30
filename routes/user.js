const {Router}=require('express');
const {usermiddleware}=require("./middlewares/user")

const userRouter=Router();
const {UserModel}=require("../db")
const jwt=require("jsonwebtoken");
const JWT_PASSWORD_USER=process.env.JWT_PASSWORD_USER;



userRouter.post("/signup", async (req,res)=>{
    const {email,firstname,lastname,password}=req.body;
    await UserModel.create({
        email,
        password,
        firstname,
        lastname
    })

    res.send({
        message:"you have singuped succesfully"
    })

})

userRouter.post("/signin", async (req,res)=>{
    const {email,password}=req.body;

    const user=await UserModel.findOne({
        email,
        password
    })

    if(user){
        const tokken= jwt.sign({
            id:user._id
        },JWT_PASSWORD_USER)

         res.send({
        tokken:tokken
    })
    }
   else{
     res.status(403).json({
        message:"Incorreect email or password"
    })

    }
})

userRouter.get("/purchases",usermiddleware,(req,res)=>{

    res.send({
        message:"you have purchased the courser"
    })

    
})

module.exports={
    userRouter:userRouter
}