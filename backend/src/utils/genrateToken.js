import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const Token = jwt.sign({userId},process.env.JWT_SECRET,
        {expiresIn : process.env.Expiry});
    
        res.cookie("jwt", Token, {
            maxAge: 24 * 60 * 60 * 1000, // MS
            httpOnly: true, // prevent XSS attacks cross-site scripting attacks
            sameSite: "strict", // CSRF attacks cross-site request forgery attacks
            secure: true
        });
}

export default generateTokenAndSetCookie;