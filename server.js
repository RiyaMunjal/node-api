import { app } from "./app.js";
import { ConnectDB } from "./Data/connectdb.js"
ConnectDB();



app.listen(process.env.PORT, ()=>{
    console.log(`server is lstening on the Port: ${process.env.PORT} on ${process.env.NODE_ENV} mode`)
})