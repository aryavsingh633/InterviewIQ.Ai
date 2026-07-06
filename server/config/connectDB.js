import mongoose from 'mongoose';
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected")
    }
    catch(err){
        console.log("DB error: "+err);
    }
} 

export default connectDB;