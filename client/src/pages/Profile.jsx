import React from 'react'
import DisplayPic from '../components/DisplayPic'
import { useSelector } from 'react-redux'
import { IoIosSettings } from "react-icons/io";


const Profile = () => {
    const user  = useSelector(state => state.user)

  return (
    <div className='h-[50vh] flex justify-center items-center'>
        <div className='flex flex-row gap-[50px]'>
            <div className="avatar"><DisplayPic/></div>
            <div className="profile flex flex-col gap-[20px]">
                <div className='userid flex gap-[30px]'>
                    <h1 className='text-2xl'>{user.currentUser.username}</h1>
                    <button className='bg-slate-700 text-white rounded-xl p-2 text-sm font-bold px-4'>Edit Profile</button>
                    <button className='bg-slate-700 text-white rounded-xl p-2 text-sm font-bold px-4'>View Archive</button>
                    <button ><IoIosSettings  size={33}/></button>
                </div>
                <div className="numbers flex flex-row gap-[40px]">
                    <div><span className='font-semibold'>{user.currentUser.posts.length}</span>   <span >  Posts</span></div>
                    <div><span className='font-semibold'>{user.currentUser.followers.length}</span>   <span>  Followers</span></div>
                    <div><span className='font-semibold'>{user.currentUser.following.length}</span>   <span>  Following</span></div>
                </div>   
                {(user.currentUser.bio!=null) && <div className="bio">{user.currentUser.bio}</div>}
            </div>
        </div>

    </div>
  )
}

export default Profile