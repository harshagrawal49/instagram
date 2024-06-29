import React from 'react'
import { Button } from '@headlessui/react'
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate()
      const onSubmit = async (data) => {
        try{
            console.log(data)
            const user = await axios.post("http://localhost:3000/auth/signup",data)
            //res.send(user)
            navigate('/')
            console.log("user created via frontend")
        }
        catch(err){
            console.log(err)
            //res.status(400).send("error while creating user")
        }
      }

  return (

    <div className='flex flex-col justify-center items-center p-[20px] '>
        <div className='flex flex-col gap-[18px] w-[360px] p-[50px] items-center border border-slate-300'>
            <img className='w-[250px]'
                src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" 
                alt="insta logo" />
            <p className='text-slate-500 font-bold text-center'>Sign up to see photos and videos from your friends.</p>
            <Button className="w-[272px] h-[34px] rounded-xl  bg-sky-500 py-2 px-4 text-sm font-bold text-white hover:bg-blue-800"> 
                Log in with Facebook
            </Button>
            <p className='text-slate-500 font-bold text-sm text-center'>OR</p>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[5px] justify-center items-center'>
                    <input placeholder='Mobile number or email address' {...register("email" , { required: true })} className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200'/>
                    <input placeholder='Full Name' {...register("fullName", { required: true })} className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200' />
                    <input placeholder='Username' {...register("username", { required: true })} className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200' />
                    <input placeholder='Password' {...register("password", { required: true })} className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200' />
                    <p className='text-[12px] m-[8px] text-center'>People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                    <p className='text-[12px] m-[8px] text-center'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                    <Button className="w-[272px] h-[34px] rounded-xl bg-sky-500 py-2 px-4 text-sm font-bold text-white hover:bg-blue-500 mt-[10px]" onClick={handleSubmit(onSubmit)}> 
                        Signup
                    </Button>
                </form>
            </div>
        </div>
        <div className='flex gap-[18px] w-[360px]  h-[70px] justify-center items-center border border-slate-300 mt-[20px]'>
            <span className='text-sm'>Have an account? <Link className="text-sky-600" to='/signin'>Login</Link> </span>
        </div>
    </div>
  )
}

export default Signup