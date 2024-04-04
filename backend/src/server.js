import Express from 'express' 
import dotenv from "dotenv"
import connectDB from "./db/mongodbconnect.js"

dotenv.config({
    path:'./env'
})
const app = new Express()


    app.get('/radha',(req,res)=>{
    
        res.send("<h1>jai shree radha</h1>")
    
    app.use("/api/v1/auth",authRoutes)     

})


app.listen(process.env.PORT,(req,res)=>{
    console.log(`gungan happening at ${process.env.PORT}`)
})