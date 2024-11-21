import express from "express"
import dotenv from "dotenv"
dotenv.config()
export const app=express()
import cors from "cors"
import cookieParser from "cookie-parser"

//body parser
app.use(express.json({limit:'50mb'}))
//cookieParser
app.use(cookieParser())
//cors->cross origin resource sharing
app.use(cors({
    origin:process.env.ORIGIN
}))

// route test 
app.get("/test",(req,res)=>{
   res.status(200).json({
   message:"Api is working"
   })
})

app.all("*",(req,res)=>{
    res.status(400).json({
        message:"page is found"
    })
})