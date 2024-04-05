import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/genrateToken.js";

const registerUser = async(req, res) => {
   try {
     const {fullName, username, password, email,confirmPassword, gender} = req.body
    console.log(req.body);
     if (password !== confirmPassword) {
         return res.status(400).json({ error: "Passwords don't match" });
     }
 
     const user = await User.findOne({ username });
     console.log(1)
 
     if (user) {
         return res.status(400).json({ error: "Username already exists" });
     }
     console.log(2)
     const salt = await bcrypt.genSalt(10);
     console.log(9)
     const hashedPassword = await bcrypt.hash(password, salt);
     console.log(10)
     console.log(hashedPassword)
     console.log(3)
 
     const boyAvtar= `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlAvtar = `https://avatar.iran.liara.run/public/girl?username=${username}`
     console.log(4)
     const newUser = new User({
         username, 
         fullName,
         gender ,
         email ,
         password : hashedPassword,
         profilePic: gender === 'male'? boyAvtar : girlAvtar
     })
     console.log(5)

      console.log(newUser);

     if (newUser){
         generateTokenAndSetCookie(newUser._id, res);
         await newUser.save();
 
         res.status(200).json({
             id : newUser._id,
             Name : newUser.fullName,
             Gender : newUser.gender,
             Email : newUser.email,
             profilePic : newUser.profilePic,
             username: newUser.username,
         })
 
     }else {
         res.status(400).json({ error: "Invalid user data" })
   } 
}
   catch (error) {
    console.log("Error in signup controller", error.message);
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
}
    
};



const loginUser = async(req,res)=>{
    try {
        const  { password , username } = req.body;
        console.log( req.body);
        // check if the user exists or not
        let user = await User.findOne({ username });
        console.log(user);
        if (!user) return res.status(401).json({ error:"Username does not exist!"});
      
        // compare the given password with the saved one
        const isValidPass=await bcrypt.compare(password, user.password);
        if(!isValidPass ) return res.status(401).json({ error: "Wrong Password!" });
        delete user.password
        generateTokenAndSetCookie(user._id,res)
        res.status(200).json({
            message :"user logged in ",
            info :{
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                Avatar : user.avatar,
            }
        })     
    } catch (error) {
        console.log("Error in login, please try again ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const logOut = async(req,res)=>{
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json(
            { message: "Logged out successfully" }
            );
    } catch (error) {
        console.log("Error in login, please try again ", error.message);
        
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export{
    registerUser,
    loginUser,
    logOut
}

  