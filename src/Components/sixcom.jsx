/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import frame13 from "./Frame 13 (1).png";
function sixcom() {
  return (
    <div className="w-screen h-auto md:h-screen flex flex-col justify-center items-center md:justify-start mt-5 pr-3">
      <div className=" w-full md:w-96 h-80 flex flex-col items-center  text-center pt-5 px-4">
        <h1 className="text-[#232222] text-lg font-semibold md:text-3xl">
          Caring is the new marketing
        </h1>
        <h5 className=" text-[#383838] text-sm md:text-lg mt-4">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more
        </h5>
      </div>
      <div className="w-screen h-auto  flex  flex-wrap gap-4 px-4 md:justify-center md:mt-4">
        <div className="w-full md:w-52 bg-[#F5F4FA]  flex flex-col text-center rounded px-2 py-5 border-[1px] border-white justify-center items-center">
          <p className="font-semibold text-[#717171]">
            Creating Streamlined Safeguarding Processes with OneRen
          </p>
          <button className="mt-5">
            <img src={frame13} alt="" />
          </button>
        </div>
        <div className="w-full md:w-52  bg-[#F5F4FA]  flex flex-col text-center rounded px-1 py-2 border-[1px] border-white justify-center items-center">
          <p className="font-semibold text-[#717171]">
            What are your safeguarding responsibilities and how can you manage
            them?
          </p>
          <button className="mt-5">
            <img src={frame13} alt="" />
          </button>
        </div>
        <div className="w-full md:w-52 bg-[#F5F4FA] flex flex-col text-center rounded px-1 py-2 border-[1px] border-white  justify-center items-center">
          <p className="font-semibold text-[#717171]">
            Revamping the Membership Model with Triathlon Australia Readmore
          </p>
          <button className="mt-5">
            <img src={frame13} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default sixcom;
