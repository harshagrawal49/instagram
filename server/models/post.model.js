import mongoose from "mongoose";
import { image } from "qr-image";

const postSchema = new mongoose.Schema({
    about:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}) 

export const postModel = new mongoose.model('post',postSchema)