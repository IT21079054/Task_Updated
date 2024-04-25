import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="flex fixed bg-black w-full text-white py-[5px] h-8 z-[10]">
      <div className="w-[96%] mx-auto flex justify-between">
        <div className="flex text-[14px]">
          <div className="flex w-[60px] justify-between self-center mr-2 md:mr-4">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="block md:flex text-[8px] md:text-[14px]">
            <div className="px-2 md:px-4 border-l border-white">
              + 145 1254 234 12
            </div>
            <div className="px-2 md:px-4 border-l border-white">
              info@flightvibes.com
            </div>
          </div>
        </div>

        <div className="flex text-[14px]">
          <div className="px-2 md:px-4">login</div>
          <div className="px-2 md:px-4 border-l border-white">En</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
