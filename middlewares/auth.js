import  jwt  from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const isAuthenticated=async (req, res, next)=>{
    const {token}=req.cookies;
    console.log('cookies:', req.cookies);
    if(!token){
        return res.status(404).json({
            "success":false,
            "message":"first get Logged in"
            })

    }
const decoded=jwt.verify(token, process.env.USER_SECRETKEY);
const id=decoded._id;
req.user =await User.findById(id);
next();

}