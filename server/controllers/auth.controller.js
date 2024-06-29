import mongoose from "mongoose"
import { createError } from "../utils/index.js "
import bcryptjs from "bcryptjs"
import { userModel } from "../models/user.models.js"
import jwt from "jsonwebtoken"

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

export const Signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let factor;

        if (email.indexOf('@') != -1 || /^\d+$/.test(email)==true) {
            factor = { email: email };
        } else {
            factor = { username: email };
        }

        const userExists = await userModel.findOne(factor);
        if (!userExists) return next(createError(400, "User does not exist"));

        const validUser = await bcryptjs.compare(password, userExists.password);
        if (!validUser) return next(createError(400, "Invalid password"));

        const { password: _, ...userWithoutPassword } = userExists.toObject();
        const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(userWithoutPassword)
        res.status(200)
            .cookie('token', token, { httpOnly: true})
            .json(userWithoutPassword);
    } catch (err) {
        console.error("Error searching user", err);
        next(createError(500, "Internal Server Error"));
    }
};