import { Router } from "express";
import { Signin, Signup } from "../controllers/auth.controller.js";

const router = Router()

router.post('/signup',Signup);
router.post('/signin',Signin)
//router.get('/get',(req,res)=>{res.send("hii")})

export default router