import jwt from "jsonwebtoken"
import nodemon from "nodemon"

export const sendcookie=(user, res, statuscode=200, message)=>{ 

  const token=jwt.sign({_id:user._id},process.env.USER_SECRETKEY)
   res
   .status(statuscode)
   .cookie ("token", token, {
    httpOnly:true,
    expires: new Date(Date.now()+900000),
    sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
    secure:process.env.NODE_ENV==="Development"?false:true
   })
   .json({
    "success": true,
    "message": message
   })
}