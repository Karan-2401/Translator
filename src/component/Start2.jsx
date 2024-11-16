import React, { Children, useState } from 'react';
import Speak from '../pages/Speak';
import Write from '../pages/Write';
import { BsPencil } from "react-icons/bs";
import { RiSpeakLine } from "react-icons/ri";


const Start2 = () => {
const [state,setState] = useState(true)  
const [color ,setColor] = useState(true);
const changeState = (x)=>{
  setState(x)
}
  return (
    <>
    <div className='flex h-screen items-center flex-col bg-yellow-200 justify-between py-5 sm:py-10'>
      <h1 className='text-3xl font-semibold font-mono  text-center '>Translator</h1>
      {state ? <Speak/>:<Write/>}
      <div className='flex gap-5'>
        <button className={color ? 'bg-white text-yellow-400 p-2 px-5 rounded-sm hover:bg-black hover:text-white trans ease-in duration-500 flex gap-2 items-center justify-center': 'bg-black text-white p-2 px-5 rounded-sm hover:bg-white hover:text-yellow-400 trans ease-in duration-500 flex gap-2 items-center justify-center'} onClick={
          ()=>{changeState(true)
            setColor(true)
          }
          }>{<RiSpeakLine/>}Speak</button>
        <button className={color ? "bg-black text-white p-2 px-5 rounded-sm hover:bg-white hover:text-yellow-400 trans ease-in duration-500 flex justify-center items-center gap-2": "bg-white text-yellow-400 p-2 px-5 rounded-sm hover:bg-black hover:text-white trans ease-in duration-500 flex justify-center items-center gap-2"} onClick={()=>{
          changeState(false)
          setColor(false)}}>{<BsPencil/>}Write</button>
      </div>
    </div>
    </>
  )
}

export default Start2