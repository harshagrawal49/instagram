import mongoose from 'mongoose';

// Async function to connect to the database
export const dbConnect = async () => {
    try {
        // Await the connection to MongoDB
        await mongoose.connect(process.env.MONGO)
        console.log("connected to db");
    } catch (err) {
        console.error("Error connecting to database", err);
        throw new Error(err)
    }
};

export const createError = (statusCode, message)=>{
    const error  = new Error()
    error.statusCode = statusCode
    error.message = message
    console.log(error)
    return error
}


