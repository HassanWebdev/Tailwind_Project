import React, { useEffect, useState } from "react";
import logo from "./Logo.png";

function LandingPage() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 941);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 941);
    }

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto flex justify-between px-2 py-2">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      {(isLargeScreen || isMenuOpen) && (
        <div id="links" className="flex gap-10 px-3">
          {["Home", "Service", "Features", "Product", "Testimonial", "FAQ"].map(
            (item, index) => (
              <a key={index} href="#" className="text-black hover:text-red-500">
                {item}
              </a>
            )
          )}
        </div>
      )}
      <div className="flex gap-10 px-3">
        {isLargeScreen ? (
          <div className="flex gap-5 items-center">
            <button className="text-[#4CAF50] px-2 py-1 rounded">
              Login
            </button>
            <button className="bg-[#4CAF50] text-white px-2 py-1 rounded w-20">
              Sign up
            </button>
          </div>
        ) : (
          <button onClick={toggleMenu} className="bg-[#4CAF50] text-white px-2 py-1 rounded">
            <i className="fa-solid fa-bars"></i> {/* Changed icon for clarity */}
          </button>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
