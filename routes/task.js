import express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { CreateTask, deleteTask, getAllTask, updateTask } from "../controllers/task.controllers.js";
const Router=express.Router();


Router.post("/newTask", isAuthenticated, CreateTask);
Router.get("/getAllTask", isAuthenticated, getAllTask);
Router.route("/user/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);

export default Router;