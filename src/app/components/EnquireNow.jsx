import Image from "next/image";
import React from "react";

const EnquireNow = () => {
  return (
    <div className="mt-80 md:mt-96 relative">
      <div className="hidden md:block h-[420px] w-[120%] bg-fuchsia-500 origin-bottom-left rotate-[-10deg] absolute"></div>
      <div className="h-[420px] lg:w-[120%] lg:origin-top-left lg:rotate-[10deg] absolute mt-[-16rem]">
        <Image
          src="/mountain.jpg"
          alt="mountain"
          className="w-full h-[420px] object-cover lg:skew-x-[10deg]"
          width={220}
          height={420}
          unoptimized
        />
        <div className="bg-black opacity-50 w-full h-[420px] absolute mt-[-420px]" />
      </div>
      <div className="relative text-center top-[-100px] md:top-[-1px] px-4 md:px-0">
        <h2 className="text-white font-medium text-[24px]">
          Do you have a specific destination in mind, <br />
          or are you open to suggestions?
        </h2>
        <button className="px-8 py-3 bg-fuchsia-500 text-white rounded mt-4 text-[12px] font-medium">
          ENQUIRE NOW
        </button>
      </div>
    </div>
  );
};

export default EnquireNow;
