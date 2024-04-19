/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./ls/Footer/Big/Logo.png";
import links from "./links/Footer/Big/Social Links.png";
function Footer() {
  return (
    <div className="w-screen md:h-screen h-auto py-5 md:px-10 px-4">
      <div className="h-1/2 bg-[#F5F4FA] pt-2 pb-5 flex flex-col justify-center items-center gap-5">
        <h1 className="text-[#273338] font-bold text-xl md:text-5xl text-center tracking-wide">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>
        <div>
          {" "}
          <button className="bg-[#4CAF4F] px-4 py-2 rounded text-white">
            {" "}
            Get a Demo
          </button>
        </div>
      </div>
      <div className="w-full h-auto md:h-1/2 bg-[#263238] md:flex ">
        <div
          id="1"
          className="w-full py-5  md:w-1/3 flex flex-col  justify-center items-center "
        >
          <img className="-ml-4" src={logo} alt="" />
          <div className="mt-5 px-1">
            <h1 className="text-[#F5F7FA]">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </h1>
            <img className="mt-4 cursor-pointer" src={links} alt="" />
          </div>
        </div>
        <div className=" md:w-1/3 flex justify-evenly items-center pt-10 pb-10">
            <div className="text-white tracking-wide">
                <h1 className="pb-4 font-bold">Company</h1>
                <p>About us</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>
            <div className="text-white tracking-wide">
                <h1 className="pb-4 font-bold">Support</h1>
                <p>Help center</p>
                <p>Terms of Services</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Status</p>
            </div>
        </div>
        <div className="md:w-1/3 pb-5 flex flex-col  justify-center md:items-start items-center  -ml-10 px-10">
            <h1 className="text-xl text-white font-semibold">Stay up to date</h1>
            <input className="bg-[#D9DBE1] h-10 w-56 mt-3 rounded px-2 " type="text" placeholder="Your Email address" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
