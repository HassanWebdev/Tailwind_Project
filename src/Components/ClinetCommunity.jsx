/* eslint-disable no-unused-vars */
import React from "react";
import logo1 from "./Logo (1).png";
import logo2 from "./Logo (2).png";
import logo3 from "./Logo (3).png";
import logo4 from "./Logo (4).png";
import logo5 from "./Logo (5).png";
import logo6 from "./Logo (6).png";
import icon from "./Icon.png";
import icon1 from "./Icon (1).png";
import icon2 from "./Icon (2).png";

function ClinetCommunity() {
  return (
    <div className="w-screen md:h-screen pb-10 ">
      <div
        id="client"
        className="w-full h-auto flex flex-col items-center mt-4 gap-2 "
      >
        <h1 className="text-[#4C4D4C] font-semibold text-xl md:text-4xl">
          Our Clients
        </h1>
        <p className="text-[#89939E] text-sm md:text-lg">
          We have been working with Fortune 500+ clients
        </p>
        <div
          id="logo"
          className="flex flex-wrap gap-3 w-full h-auto justify-evenly mt-5 md:gap-0 md:mt-10 px-4" 
        >
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center text-center font-semibold text-xl mt-3 text-[#313231] md:text-3xl md:mt-10">
        <h1>Manage your entire community <br /> in a single system</h1>
      </div>
      <div
        id="community  "
        className="w-full flex justify-center md:justify-evenly flex-wrap gap-5 mt-5 pr-5"
      >
        <div className="w-40 md:w-64 text-2xl text-center flex flex-col justify-center items-center">
          <img src={icon} alt="" />
          <h1 className="font-semibold ">Membership</h1>
          <h1 className="font-semibold ">Organisation</h1>
          <p className="text-sm md:text-xl mt-5 text-[#4C4D4C]">
            Our membership management software provides full automation of
            membership renewals and payments{" "}
          </p>
        </div>
        <div className="w-40 md:w-64 text-2xl text-center flex flex-col justify-center items-center">
          <img src={icon1} alt="" />
          <h1 className="font-semibold ">National <br/> Associations</h1>
          <p className="text-sm md:text-xl mt-5 text-[#4C4D4C]">
            Our membership management software provides full automation of
            membership renewals and payments{" "}
          </p>
        </div>
        <div className="w-40 md:w-64 text-2xl text-center flex flex-col justify-center items-center">
          <img src={icon2} alt="" />
          <h1 className="font-semibold ">Clubs And <br /> Groups</h1>
          <p className="text-sm md:text-xl mt-5 text-[#4C4D4C]">
            Our membership management software provides full automation of
            membership renewals and payments{" "}
          </p>
        </div>
       
        
      </div>
    </div>
  );
}

export default ClinetCommunity;
