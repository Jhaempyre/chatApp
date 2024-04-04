import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Error connecting to databse ",error.message)
        process.exit(1)
    }
}