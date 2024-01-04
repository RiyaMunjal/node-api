import { User } from "../models/user.models.js"
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/features.js"


export const login=async(req, res, next)=>{
  try {
    const {name, email, password}=req.body;
    let user= await User.findOne({email});
    if (!user) {
        return  next(new errorHandler("user not registered",404));
    }
const isMatched= await bcrypt.compare(password, user.password);
if (!isMatched) {
    return  next(new errorHandler("Incorrect password",404));
}
sendcookie(user, res, 200, `${user.name} You are loggedInSUccessfully!!`);
  } catch (error) {
    next(error)
  }
};

export const Myprofile=(req, res)=>{
res.status(200).json({
    "success":true,
    user:req.user
})
};

export const register=async(req, res, next)=>{
try {
    const {name, email, password}=req.body;
let user= await User.findOne({email});
if (user) {
    return  next(new errorHandler("user already exist",404));
}
const hashed_password= await bcrypt.hash(password, 10);
  user= await User.create({
    name,
    email, 
    password:hashed_password
   })

sendcookie(user, res, 201, "user registered Successfully");
} catch (error) {
    next(error)
}
};

export const logout=(req, res)=>{

    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true
    }).json({
        success:true,
        message:"logged out successfully!"
    })
};





























/*export const createnewuser=async (req, res)=>{
    const {name, email, password}=req.body
    let user=await User.create({
        name, 
        email,
        password
    })
    res.json({
        user
    })

}

export const getuser=async (req, res)=>{
    const {id}=req.params
    const user= await User.findById(id);
    
    console.log(req.params)
    res.json({
        "success": true,
        user
    })

}

export const updateuser=async(req, res)=>{
    res.json({
        "success": true,
        "message":" updated"
    })
}

export const deleteuser=async(req, res)=>{
    res.json({
        "success": true,
        "message": "deleted"
    })
}*/