import React, { Children, useState } from 'react';
import Speak from '../pages/Speak';
import Write from '../pages/Write';
import { BsPencil } from "react-icons/bs";
import { RiSpeakLine } from "react-icons/ri";


const Start2 = () => {
const [state,setState] = useState(true)  
const changeState = (x)=>{
  setState(x)
}
  return (
    <>
    <div className='flex h-screen items-center flex-col bg-yellow-200 justify-between py-5 sm:py-10'>
      <h1 className='text-3xl font-semibold font-mono  text-center '>Translator</h1>
      {state ? <Speak/>:<Write/>}
      <div className='flex gap-5'>
        <button className='bg-black text-white p-2 px-5 rounded-sm hover:bg-white hover:text-yellow-400 trans ease-in duration-200 flex gap-2 items-center justify-center active:bg-white active:text-yellow-400' onClick={()=>{changeState(true)}}>{<RiSpeakLine/>}Speak</button>
        <button className='bg-black text-white p-2 px-5 rounded-sm hover:bg-white hover:text-yellow-400 trans ease-in duration-200 flex justify-center items-center gap-2 active:bg-white active:text-yellow-400' onClick={()=>{changeState(false)}}>{<BsPencil/>}Write</button>
      </div>
    </div>
    </>
  )
}

export default Start2