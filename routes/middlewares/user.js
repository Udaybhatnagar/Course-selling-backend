const jwt=require("jsonwebtoken");
const user = require("../user");
const JWT_PASSWORD_USER="dfjfnfnklfndkfn";

function usermiddleware(req,res,next){
    const tokken=req.haders.token;
    const decoded=jwt.verify(tokken,JWT_PASSWORD_USER);

    if(decoded){
        req.userID=decoded.id;
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