import { errorHandler } from "../middlewares/error.js";
import { Task } from "../models/tasks.models.js";

export const CreateTask =  async (req, res, next)=>{
    try {
        const {title, description}=req.body;
        const task= await Task.create({
            title,
            description,
            user: req.user,     
        })
    
        res.status(201).json({
            success: true,
            message: "task created"
        })
   
} catch (error) {
    next(error)  
}
};

export const getAllTask=async(req, res, next)=>{
 try {
    const {_id}=req.user;
    const task=await Task.find({user: _id})
    if(!task){
        return res.status(404).json({
            success:false,
            message:"No task of the given user is availabale"
        })
    }
    res.status(200).json({
        success:true,
        task
    })
 } catch (error) {
    next(error)
 }
};

export const updateTask=async(req, res, next)=>{
    try {
        const {id}=req.params
    const task=await Task.findById(id); 

    if (!task) {
        return  next(new errorHandler("Invalid task id",404));
    }
    task.iscompleted= !task.iscompleted;
    await task.save()
    res.status(200).json({
        success: true,
        message:"updated"
    })
    } catch (error) {
        next(error)
    }
};

export const deleteTask=async(req, res, next)=>{
  try {
    const {id}=req.params
    const task=await Task.findById(id);
    if(!task){
       return  next(new errorHandler("Invalid task id",404));
    }

    await task.deleteOne()
    res.status(200).json({
        success: true,
        message:"deleted"
    })
  } catch (error) {
    next(error)
  }
};
