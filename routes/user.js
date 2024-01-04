import  express  from "express"
import {Myprofile, login, register, logout } from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middlewares/auth.js"

const Router=express.Router()


Router.get("/", (req, res)=>{
    res.json({
        name:"Riya",
        email:"riyamunjal245@gmail.com",
        password:"password"
    })
})


Router.post("/register", register)
Router.post("/login", login)
Router.get("/logout", logout)
Router.get("/me",isAuthenticated, Myprofile)



// Router.route("/userid/:id").get(getuser).put(updateuser).delete(deleteuser)
// Router.get("/userid/:id", getuser )
// Router.put("/userid/:id", updateuser);
// Router.delete("/userid/:id", deleteuser);




export default Router;
