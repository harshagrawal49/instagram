import mongoose from "mongoose"
import { createError } from "../utils/index.js "
import bcryptjs from "bcryptjs"
import { userModel } from "../models/user.models.js"

export const Signup = async (req,res,next) => {

    const {email, fullName, username, password} = req.body
    console.log(req.body);
    
    if(!email || !fullName || !username || !password) {
        console.log("all fields required")
        res.send("enter all fields")
        next(createError(400,"all fiels required"))
    }

    const hashedPassword = bcryptjs.hashSync(password,10)

    try{
        await userModel.create({email,fullName,username,password:hashedPassword})
        console.log("user added successfully");
        res.send("user added")
    }
    catch(err){
        console.error("error creating user", err);
    }
}