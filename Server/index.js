const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const userRouter=require('./Routes/auth')
const cookieParser=require('cookie-parser')
const recipeRouter=require('./Routes/reciper')

require('dotenv').config()

const app=express()

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/auth',userRouter)
app.use('/recipe',recipeRouter)


mongoose.connect(process.env.MONGODB_URI)

app.listen(process.env.PORT,()=>{
    console.log("Server Starts")
})