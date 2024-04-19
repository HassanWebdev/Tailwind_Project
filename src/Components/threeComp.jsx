/* eslint-disable no-unused-vars */
import React from 'react'
import rifik from './left/mobile-login/rafiki.png'

function threeComp() {
  return (
    <div className='w-screen h-auto   flex flex-col bg-[#F5F4FA] justify-between items-center md:flex-row px-4  pt-5  pb-5'>
      <div id='rifik' className='w-1/2'>
        <img src={rifik} alt="" />
      </div>
      <div className='w-full md:w-1/2 flex flex-col md:px-2 pr-3 '>
        <h1 className='font-semibold text-black text-lg mt-5 text-center md:text-left md:text-3xl'>The unseen of spending three <br /> years at Pixelgrade</h1>
        <p className='mt-10 text-left md:text-left text-[#4C4D4C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="bg-[#4CAF4F] px-3 rounded py-1 text-white mt-5 md:py-2 ">
            Learn More
          </button>
      </div>
    </div>
  )
}

export default threeComp
