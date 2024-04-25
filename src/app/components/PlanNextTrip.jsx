import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const PlanCard = () => {
  return (
    <div className="w-[240px] h-[360px] mr-2 relative flex-none">
      <div className="h-[20px] bg-white rounded absolute left-4 top-4 flex px-[12px]">
        <p className="font-medium self-center text-[10px]">Direct</p>
      </div>
      <div className="w-[28px] h-[28px] bg-white rounded-full absolute right-4 top-3 flex pl-[6px]">
        <FaRegHeart className="text-red-500 self-center cp" />
      </div>
      <Image
        src="/waterfall.jpg"
        alt="waterfall"
        className="w-[240px] h-[240px]"
        width={120}
        height={120}
        unoptimized
      />
      <div className="bg-gray-200">
        <div className="flex justify-between px-4 py-2">
          <div>
            <p className="font-medium text-[14px]">California</p>
            <p className="font-medium text-[12px]">Colombo - Riga</p>
          </div>
          <div>
            <p className="font-bold text-[15px] text-blue-800">$478 pp</p>
            <p className="font-medium text-[11px]">(29h 30m)</p>
          </div>
        </div>
        <div className="border-t-2 border-black text-center text-[11px] py-2">
          Bussiness Class 3 Nights
        </div>
      </div>
    </div>
  );
};

const PlanNextTrip = () => {
  return (
    <div className="w-[90%] mx-auto mt-8 md:mt-12">
      <div className="text-left md:text-center">
        <h2 className="font-bold text-[28px]">
          Plan your next trip with flight vibes
        </h2>
        <p className="font-medium">Treading deals</p>
      </div>
      <div className="flex justify-between mt-8 mb-4 md:mb-0 overflow-x-scroll overflow-y-hidden md:overflow-x-hidden">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
      <div className="flex justify-end text-blue-800 mt-[-16px] cp">
        <p className="text-[12px] font-bold mr-1">VIEW ALL 151 DEALS </p>
        <IoIosArrowForward className="self-center font-bold" />
      </div>
    </div>
  );
};

export default PlanNextTrip;
