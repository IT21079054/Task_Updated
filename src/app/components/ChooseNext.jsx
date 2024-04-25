import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const NEXT_LIST = [
  {
    name: "Californina",
    imgPath: "/resort.jpg",
  },
  {
    name: "London",
    imgPath: "/lake1.jpg",
  },
  {
    name: "Rome",
    imgPath: "/mountain.jpg",
  },
  {
    name: "Canada",
    imgPath: "/tree.jpg",
  },
  {
    name: "Srilanaka",
    imgPath: "/waterfall1.jpg",
  },
];

const ChooseNext = () => {
  return (
    <div className="w-[90%] mx-auto mt-16">
      <div className="text-left md:text-center">
        <h2 className="font-bold text-[28px]">Choose your next adventures</h2>
        <p className="font-medium">Popular Destinations</p>
      </div>
      <div className="flex mt-8 justify-between overflow-x-scroll md:overflow-x-hidden">
        {NEXT_LIST.map((single, i) => {
          return (
            <div className="w-[240px] h-[320px] relative mr-3 md:mr-1 flex-none" key={i}>
              <div className="w-[28px] h-[28px] bg-white rounded-full absolute right-4 top-3 flex pl-[6px]">
                <FaRegHeart className="text-red-500 self-center cp" />
              </div>
              <Image
                src={single.imgPath}
                alt={single.name}
                className="w-[240px] h-[320px]"
                width={120}
                height={120}
                unoptimized
              />
              <div className="text-center text-white mt-[-32px]">
                {single.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto flex justify-end text-blue-800 mt-2 cp">
        <p className="text-[12px] font-bold mr-1">VIEW ALL 151 DESTINATION </p>
        <IoIosArrowForward className="self-center font-bold" />
      </div>
    </div>
  );
};

export default ChooseNext;
