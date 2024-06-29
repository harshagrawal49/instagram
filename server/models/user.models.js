import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    email:{
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    bio:{
        type:String
    },
    followers: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    following: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
})

export const userModel = new mongoose.model('user',userSchema)