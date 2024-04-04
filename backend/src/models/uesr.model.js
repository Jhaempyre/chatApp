import mongoose , {Schema} from "mongoose";


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
        confirmPassword :{
            type : String ,
            required : [ true ,"Confirm Password"]
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