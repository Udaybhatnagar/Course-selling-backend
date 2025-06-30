const jwt=require("jsonwebtoken");
const JWT_PASSWORD_USER="dfjfnfnklfndkfn";

function usermiddleware(req,res,next){
    const tokken=req.headers.token;
    const decoded=jwt.verify(tokken,JWT_PASSWORD_USER);

    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"you are not siggne in"

        })
    }
}
 

module.exports={
    usermiddleware:usermiddleware
}