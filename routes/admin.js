const {Router}=require("express");
const adminRouter=Router();


adminRouter.post("/signin",(req,res)=>{
    res.json({
        message:"admin signin"
    })


});

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"admin signup"
    })

})
adminRouter.post("/course",(req,res)=>{
    res.json({
        message:"admin signin"
    })


});

adminRouter.post("/course/bulk",(req,res)=>{
    res.json({
        message:"admin signup"
    })

})


module.exports={
    adminRouter:adminRouter
}