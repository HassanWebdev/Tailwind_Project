/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "./Logo.png";

function Landing_page() {
  const [screen, setscreen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize ", () => {
      if (window.innerWidth >= 941) {
        setscreen(true);
      } else {
        setscreen(false);
      }
    });
    window.addEventListener('load', function(event) {
   // Your load event handling code here 
    if (window.innerWidth >= 941) {
        setscreen(true);
      } else {
        setscreen(false);
    }
    });
  }, []);
  return (
    <div className="w-full h-auto flex justify-between px-2 gap-2 py-2">
      <div>
        <img src={logo} alt="" />
      </div>
      {screen ? (
        <div id="links" className="flex gap-10 px-3 ">
          {["Home", "Service", "Features", "Product", "Testimonial", "FAQ"].map(
            (item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-black hover:text-red-500"
                >
                  {item}
                </a>
              );
            }
          )}
        </div>
      ) : null}
      <div className="flex gap-10 px-3 ">
        {screen ? (
          <div className="flex gap-5 items-start ">
            <button className="text-[#4CAF4F] px-1 rounded-[.2rem] py-1 ">
              Login
            </button>
            <button className="bg-[#4CAF4F] px-1 rounded-[.2rem] py-1 text-white w-20">
              Sign up
            </button>
          </div>
        ) : null}
        {screen ? null : (
          <div>
            <button className="bg-[#4CAF4F] px-1 rounded-[.2rem] py-1 text-white "></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing_page;
