import mongoose from 'mongoose'
import Conversation from '../models/conversation.model';
import Message  from '../models/message.model';

const sendMesage = async(req,res)=>{
    try {
        const {message}= req.body
        const { id : receiverId } = req.params;
        const senderId = req.user._id;
    
        let conversation = await Conversation.findOne({
            partcipants : {$all:[senderId,receiverId]}
        })
    
        if (!conversation){
            conversation=await  Conversation.create({partcipants: [senderId,receiverId]})
    
    }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
           conversation.messages.push(newMessage);
        }
    
        await Promise.all([conversation.save(),newMessage.save()])
        .then(()=>{
            res.status(201).json({
                success:true,
                data: newMessage
            });
        }).catch((err)=>console.log(err))
    } catch (error) {
        console.log('Error in sending the message', error.message);
        return res.status(500).json({
            success: false,
            error:"Server Error"
          });
    }
}



const getMessage = async(req ,res ) => {
    try {   
        const { id :senderId} = req.params;
        // console.log("this is the user ID",id);
        const  conversation = await Conversation.findOne({
            partcipants : {$all:[senderId,receiverId]}
        })

        if (conversation){
            const messages = conversation.messages;
        
        return res.status(200).json({
            success: true,
            data: messages
        })
    }

    }
    catch(error){
        console.log(error.message)
        return res.status(404).json({
            messgae : "server error occured"
        })
    }
    }  
    
export {sendMesage,
    getMessage
}    