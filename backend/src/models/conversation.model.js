import mongoose from "mongoose"

const conversationScehma = new  mongoose.Schema({
    partcipants:[{
        type : mongoose.Schema.ObjectId,
        ref: "User" ,
        required :true
    }],
    messages : [{
        type : mongoose.Schema.ObjectId,
        ref : "Message" ,
        required : true,
        default :[]
    }]

},{
    timestamps : true}
    )

    const Conversation = mongoose.model("Conversation", conversationScehma);

    export default  Conversation;

