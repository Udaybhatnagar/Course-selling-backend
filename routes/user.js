const {Router}=require('express');

const userRouter=Router();



userRouter.post("/signup",(req,res)=>{

    res.send({
        message:"you have singuped"
    })

})

userRouter.post("/signin",(req,res)=>{

    res.send({
        message:"you have singuped"
    })

    
})

userRouter.get("/purchases",(req,res)=>{

    res.send({
        message:"you have purchased the courser"
    })

    
})

module.exports={
    userRouter:userRouter
}