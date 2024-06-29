import { Button } from "flowbite-react";
import userSlice from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";
import DisplayPic from "../components/DisplayPic";



const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const handleClick= ()=>{
    dispatch(signOut())
    navigate('/')
  }
  
  return (
    <div>
        {user.currentUser.fullName}
        <br />
        <DisplayPic/>
        <button className="bg-slate-800 text-white" onClick={handleClick}>Signout</button>
    </div>
  )
}

export default Home