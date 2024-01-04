import mongoose from "mongoose";
import { User } from "./user.models.js";
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
       type:String,
       required:true,
   },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,  
       }, 
    iscompleted:{
        type:Boolean,
        default:false,
    }

},{timestamps:true})

export const Task= mongoose.model("Task",TaskSchema);     