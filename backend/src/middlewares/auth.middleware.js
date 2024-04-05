import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const verifyJwt = async(req,res,next)=>{
    try {
        const token = req.cookies?.jwt;
        console.log(1)
        if(!token){
            res.status(400).json({
                message : "Invalid user "
            })
        }
        console.log(token);
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(2)
        console.log(decodedToken)
        if(!decodedToken){
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        console.log(4)
        const user = await User.findById(decodedToken.userId).select("-password");
        console.log(5)
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