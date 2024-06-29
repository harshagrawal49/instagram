import React from 'react'
import { Button } from '@headlessui/react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { signInFailure, signInSuccess, signInStart } from '../redux/user/userSlice'

const Signin = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const onSubmit = async (data) => {
        try {
            console.log(data)
            dispatch(signInStart())
            const response = await axios.post("http://localhost:3000/auth/signin", data)
            dispatch(signInSuccess(response.data))
            console.log("User signed in via frontend")
            navigate('/home')
        } catch (err) {
            console.log(err)
            dispatch(signInFailure(err))
        }
    }

    return (
        <div className='flex flex-col justify-center items-center p-[20px]'>
            <div className='flex flex-col gap-[18px] w-[360px] p-[50px] items-center border border-slate-300'>
                <img className='w-[250px]'
                    src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" 
                    alt="insta logo" />
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[5px] justify-center items-center'>
                        <input 
                            placeholder='Phone number, username or email address' 
                            {...register("email" , { required: true })} 
                            className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200'
                        />
                        <input 
                            placeholder='Password' 
                            {...register("password", { required: true })} 
                            className='w-[272px] h-[38px] bg-slate-100 p-[8px] text-[12.5px] text-slate-600 border border-slate-200' 
                        />
                        <Button 
                            className="w-[272px] h-[34px] rounded-md bg-sky-500 py-2 px-4 text-sm font-bold text-white hover:bg-blue-500 mt-[10px]" 
                            type="submit"
                            disabled={user.loading}
                        > 
                            Log in
                        </Button>
                        <p hidden={(user.error === null)} className='text-red-800'>Invalid username or password!</p>
                    </form>
                </div>
                <p className='text-slate-500 font-bold text-sm text-center'>OR</p>
                <p className='text-blue-900 text-[14px] font-bold'>Log in with Facebook</p>
                <p className='text-[12px] text-slate-500'>Forgotten your password?</p>
            </div>
            <div className='flex gap-[18px] w-[360px] h-[70px] justify-center items-center border border-slate-300 mt-[20px]'>
                <span className='text-sm'>Don't have an account? <Link className="text-sky-600" to='/signup'>Sign up</Link></span>
            </div>
        </div>
    )
}

export default Signin
