import { mongoose } from "mongoose";

export const ConnectDB=()=>{
    mongoose.connect(process.env.MONGODB_URI,{
    dbName:"Node-Api"
}).then(()=>{
    console.log(`Database is connected`)
}).catch((error)=>{
    console.log(`Error : ${error}`);
})
}