import Image from "next/image";
import React from "react";
import { CiLight } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-blue-100 h-16 absolute w-full z-[5]">
      <div className="flex justify-between w-[96%] mx-auto pt-2">
        <div className="cp">
          <Image src="/logo1.png" alt="logo" width={140} height={100} />
        </div>
        <div className="hidden md:flex font-bold self-center">
          <div className="mr-3 cp">Flights</div>
          <div className="mr-3 cp">Hotels</div>
          <div className="mr-3 cp">Promations</div>
          <div className="mr-3 cp">Help</div>
          <div className="mr-3 cp">Sign in</div>
        </div>
        <div className="flex">
          <div className="rounded-full bg-purple-500 text-white h-10 w-10 flex self-center cp">
            <CiLight className="text-[28px] self-center mx-auto" />
          </div>
          <div className="hidden md:flex border-[3px] border-black h-10 mx-4 px-4 pt-1 self-center font-bold cp">
            Book A Flight
          </div>
          <div className="self-center ml-4 md:ml-0 cp">
            <RxHamburgerMenu className="text-[32px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
