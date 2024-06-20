import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { dbConnect } from "./utils/index.js"
import AuthRoutes from "./routes/auth.routes.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


dbConnect()
.then (()=>{
    app.listen(PORT, ()=>{console.log(`listeting at port ${PORT}`);})
}) 
.catch((err)=>{console.log("cannot connect to server")}) 

app.use('/auth',AuthRoutes)
