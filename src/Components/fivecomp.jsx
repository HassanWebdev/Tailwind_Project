/* eslint-disable no-unused-vars */
import React from 'react'
import illustr from  './Illustration.png'
import logo1 from "./Logo (8).png";
import logo2 from "./Logo (2).png";
import logo3 from "./Logo (3).png";
import logo4 from "./Logo (4).png";
import logo5 from "./Logo (5).png";
import logo6 from "./Logo (6).png";
import frame from './Frame 13.png'
function fivecomp() {
  return (
    <div className='w-screen  flex flex-col justify-center items-center bg-[#F5F4FA]  md:flex-row pt-5 pb-3'>
        <div className='w-1/2 flex ml-10 '>
            <img src={illustr} alt="" />
        </div>
        <div className='md:w-1/2 w-full mt-10 text-[#413f3f] px-5'>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <br />
            <p className='text-[#4CAF4F]'>Tim Smith</p>
            <br />
            <p>British Dragon Boat Racing Association</p>
            <br />
            <div
          id="logo"
          className="flex flex-wrap gap-3 w-full h-auto justify-evenly mt-5 md:gap-0 md:mt-10"
        >
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <button><img src={frame} alt="" /></button>

        </div>
        </div>
      
    </div>
  )
}

export default fivecomp
