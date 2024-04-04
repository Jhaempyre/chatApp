import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        email:{
        type:String,
        required:true,
        unique:true,
        lowercase :true,
        trim:true,
        },
        password:{
        type: String,  
        required:[true,"Passowrd caahiye re baba"]
        },
        username: {
			type: String,
			required: true,
			unique: true,
        },
        fullName :{
            type : String ,
            required : [ true ,"Full name is required" ] 
        },
        gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
        profilePic: {
			type: String,
			default: "",
		},

},{
    timestamps:true
})


const User = mongoose.model("User", userSchema);

export default User;