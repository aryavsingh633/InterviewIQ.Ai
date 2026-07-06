import User from '../models/userModel.js'
import genToken from '../config/token.js'

export const googleAuth = async (req,res)=>{
    try{
        const {name, email} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({name, email})
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {http:true, secure:true, sameSite:"none", maxAge:7*24*60*60*1000});
        return res.status(200).json(user);
    }
    catch(err){
        return res.status(500).json({maessage:`Google Auth Error ${err.message}`});
    }
}

export const logout = async (req,res)=>{
    try{
        await res.clearCookie("token");
        res.status(200).send("Logout Succesfully");
    }
    catch(err){
        res.status(500).send("Logout Error")
    }
}