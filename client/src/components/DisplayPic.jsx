
import { Avatar } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const DisplayPic = (size)=> {
    const user = useSelector(state=> state.user)
  return (
    <div className="">
      <Avatar img='https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1' alt="avatar" rounded />
    </div>
  );
}

export default DisplayPic
