import express from "express"
import userRouter from "./routes/user.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import taskRouter from "./routes/task.js"
import  Errormiddleware  from "./middlewares/error.js"
import cors from "cors"

config({
    path:"./Data/.env"
})

export const app=express()

//using middlewarwes
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
})
 

)

//using routes
app.use("/users/api/v1", userRouter)
app.use("/users/api/v1", taskRouter)

//using error middleware
app.use(Errormiddleware)



