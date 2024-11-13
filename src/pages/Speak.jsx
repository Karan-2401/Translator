import React from 'react'
import { languages } from '../Languages'
import { FaPlay } from "react-icons/fa";

const Speak = () => {
  return (
    <div className='w-screen flex items-center justify-center'>
      <div className='flex flex-col w-11/12 sm:w-4/12 items-center justify-around gap-5 bg-white p-5 rounded-xl shadow-lg'>
        <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg'>
          {languages.map((x)=>{
            return <option value={x.name} key={x.name}>{x.name}</option>
          })}
        </select>
        <button className='bg-black text-yellow-400 p-2 rounded-2xl flex items-center justify-center w-10 h-10'>{<FaPlay/>}</button>
        <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg'>
          {languages.map((x)=>{
            return <option value={x.name} key={x.name}>{x.name}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default Speak
