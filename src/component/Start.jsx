import React from 'react'
import img from '../assets/img.png'
const Start = ({action}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-yellow-200'>
        <div className='flex flex-col gap-5 items-center'>
            <h1 className='text-3xl font-semibold font-mono  text-center'>Translator</h1>
            <p className='text-lg font-semibold font-mono text-center'>Translate easy and fast into 100+ languages</p>
            <img src={img} alt="img" className='w-64' />
            <button className='bg-black text-white p-2 px-5 rounded-sm hover:bg-white hover:text-yellow-400 trans ease-in duration-200' onClick={()=>{action(false)}}>Continue</button>
        </div>     
    </div>
  )
}

export default Start