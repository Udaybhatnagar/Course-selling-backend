const {Router}=require("express");
const adminRouter=Router();
const {AdminModel,CourseModel}=require("../db")
const jwt=require("jsonwebtoken");
const { adminmiddleware } = require("./middlewares/admin");
const JWT_PASSWORD_Admin="udaybahtnagaradmin";


adminRouter.post("/signup", async (req,res)=>{
    const {firstname,lastname,email,password}=req.body;

    await AdminModel.create({
        firstname,
        lastname,
        email,
        password
    })
    res.json({
        message:"admin signup"
    })


});

adminRouter.post("/signin", async (req,res)=>{
const {email,password}=req.body;
const admin= await AdminModel.findOne({
    email,
    password
})
if(admin){
    const tokken=jwt.sign({
        id:admin._id
    },JWT_PASSWORD_Admin)

    res.send({
        tokken:tokken
    })
}
else{
    res.status(403).json({
        message:"wrong credentials"
    })
}

    

})

adminRouter.post("/course",adminmiddleware,async (req,res)=>{

    const adminId=req.adminId;
    const {title,description,price,imageurl}=req.body;
    await CourseModel.create({
        title,
        imageurl,
        description,
        price,
    CourseId:adminId
        
    })
    res.json({
        message:"Course created",
        CourseId:adminId
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