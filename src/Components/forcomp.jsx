/* eslint-disable no-unused-vars */
import React from 'react'
import pana from './left2/mobile-login/pana.png'

function forcomp() {
  return (
    <div className='w-screen h-auto pt-5 pb-5 flex flex-col justify-between items-center md:flex-row px-4'>
    <div id='rifik' className='w-1/2'>
      <img src={pana} alt="" />
    </div>
    <div className=' w-full md:w-1/2 md:px-2 flex flex-col pr-3'>
      <h1 className='font-semibold text-black text-lg mt-5 text-center md:text-left md:text-3xl'>How to design your site footer like <br /> we did</h1>
      <p className='mt-10 text-left text-[#4C4D4C] '>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
      <button className="bg-[#4CAF4F] px-3 rounded py-1 text-white mt-5 md:py-2 ">
          Learn More
        </button>
    </div>
  </div>
  )
}

export default  forcomp

