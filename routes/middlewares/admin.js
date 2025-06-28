const jwt=require("jsonwebtoken");

const JWT_PASSWORD_Admin="udaybahtnagaradmin";

function adminmiddleware(req,res,next){
    const tokken=req.haders.token;
    const decoded=jwt.verify(tokken,JWT_PASSWORD_Admin);

    if(decoded){
        req.adminId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"you are not siggne in"

        })
    }
}
 
module.exports={
    adminmiddleware:adminmiddleware
}