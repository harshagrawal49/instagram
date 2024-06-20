import { Router } from "express";
import { Signup } from "../controllers/auth.controller.js";

const router = Router()

router.post('/signup',Signup);
router.get('/get',(req,res)=>{res.send("hii")})

export default router