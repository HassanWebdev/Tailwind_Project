/* eslint-disable no-unused-vars */
import React from 'react'
import illus from './Illustration.png'
import  Navbar  from './Navbar'

function Landing_page() {
  return (
    
    <div className='w-screen h-auto md:h-screen flex px-4  items-center bg-[#F5F4FA]   flex-col'>
       <Navbar/>
       <div className='flex w-screen h-full md:items-center mt-8 px-4 md:justify-center  box-border pb-5'>
         <div className='w-[70%] md:pl-20'>
            <h1 className='text-[#4D4D4D] text-4xl sm:text-5xl md:text-6xl tracking-tighter '>Lessons and insights</h1>
            <h1 className='text-[#4CAF4F] text-4xl sm:text-5xl md:text-6xl tracking-tighter  '>from 8 years</h1>
            <p className='text-sm text-[#bdbaba] pr-2 mt-3'>Where to grow your bussiness as a photographer: site or social media</p>
            <button className='bg-[#4CAF4F] rounded px-4 py-1 text-white mt-4'>Register</button>
        </div>
        <div className='w-[30%] flex justify-center flex-col '>
            <img className='w-full h-auto' src={illus} alt="" />
        </div>
       </div>
       
      
    </div>
  )
}

export default Landing_page
