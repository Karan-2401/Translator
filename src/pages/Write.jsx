import React from 'react'
import {languages} from '../Languages'

const Write = () => {
  return (
    <div className='h-auto w-screen px-2 gap-4 flex justify-center items-center flex-col'>
      <div className='bg-white rounded-md w-11/12 sm:w-6/12 shadow-lg'>
        <div className='flex flex-col p-2 gap-2 box-border sm:h-52'>
          <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg'>
            {languages.map((x)=>{
             return <option value={x.name} key={x.name}>{x.name}</option>
            })}
          </select>
          <textarea name="" id="" className='px-2 resize-none outline-none' placeholder='Translate from'></textarea>
        </div>
      </div>

      <div className='bg-white rounded-md w-11/12 sm:w-6/12 shadow-lg'>
      <div className='flex flex-col p-2 gap-2 sm:h-52 '>
        <select name="" id="" className='w-4/12 bg-black text-yellow-500 p-1 rounded-lg '>
        {languages.map((x)=>{
             return <option value={x.name} key={x.name}>{x.name}</option>
            })}
        </select>
        <textarea name="" id="" placeholder='Translate to' className='resize-none px-2 outline-none'></textarea>
      </div>
      </div>
    </div>
  )
}

export default Write
