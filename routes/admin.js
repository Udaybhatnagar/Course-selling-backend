const {Router}=require("express");
const adminRouter=Router();
const {AdminModel,CourseModel}=require("../db")
const jwt=require("jsonwebtoken");
const { adminmiddleware } = require("./middlewares/admin");
const JWT_PASSWORD_Admin=process.env.JWT_PASSWORD_Admin;


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
    CreatorId:adminId
        
    })
    res.json({
        message:"Course created",
        CourseId:course._id
    })
});

adminRouter.put("/course", adminmiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await CourseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})


adminRouter.get("/course/bulk", adminmiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await CourseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports={
    adminRouter:adminRouter
}