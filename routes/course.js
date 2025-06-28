const {Router}=require("express");
const courseRouter=Router();

courseRouter.post("/purchase",(req,res)=>{
    res.send({
        message:"course purchased"
    })
})

courseRouter.get("/preview",(req,res)=>{
    res.send({
        message:"course preview"
    })
})

module.exports={
    courseRouter:courseRouter
}