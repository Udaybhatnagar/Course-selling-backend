const mongoose=require("mongoose");
const schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const UserSchema=new schema({
    firstname:String,
    lastname:String,
    email:{type:String ,unique:true},
    password:String
})

const ADminSchema=new schema({
    firstname:String,
    lastname:String,
    email:{type:String ,unique:true},
    password:String
})

const courseSchema=new schema({
    title:String,
    description:String,
    price:Number,
    imageurl:String,
    CourseId:ObjectId
})

const purchaseSChema=new schema({
    userId:ObjectId,
    courseId:ObjectId,
})

const UserModel=mongoose.model("user",UserSchema);
const AdminModel=mongoose.model("admin",ADminSchema);
const CourseModel=mongoose.model("course",courseSchema);
const PurchaseModel=mongoose.model("purchases",purchaseSChema);

module.exports={
    UserModel,
    AdminModel,
    PurchaseModel,
    knkdnfkdio,dsfidkfdfkndifjdlkfdflkmdofjdf,mdflkdfdfldmfl;dfml;f
    CourseModel,

}
