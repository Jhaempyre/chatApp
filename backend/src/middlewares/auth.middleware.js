import jwt from "jsonwebtoken"
import User from "../models/uesr.model"

const verifyJwt = async(req,res,next)=>{
    try {
        const  token= req.cookies?.jwt;
    
        if(!token){
            res.status(400).json({
                message : "Invalid user "
            })
        }
        console.log(token);
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!decodedToken){
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        const user = await User.findById(decoded.userId).select("-password");
        console.log(user)
    
        if(!user){
            return res.status(401).json({ error: "Unauthorized - Invalid User and token " });
        }
    
        req.user=user
        next();
    } catch (error) {
        console.log("Error in authenticating user , please try again with valid account ", error.message)
        res.status(500).json({
            error : "Internal server error" 
        })
    }

}   

export default  verifyJwt;