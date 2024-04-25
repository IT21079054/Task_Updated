import Image from "next/image";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative h-[440px] md:h-[480px]">
      <div className="w-full md:w-3/5 px-4 mt-10 md:mt-20 float-right bg-white z-12">
        <h2 className="font-bold text-[28px]">
          Why Book Flights with Flight Vibes
        </h2>
        <p className="mt-4 font-medium">
          Flights to Suit You Ready to jet off? Booking a flight is the first
          step to an exciting getaway. However, with so many things to consider,
          finding cheap flights is not always the easiest of tasks. Thats why,
          at flight vibes, we have made things simple. Letting you search and
          compare flights from
        </p>
        <div className="mt-6 ml-8 font-medium">
          <div className="flex">
            <FaRegArrowAltCircleRight className="self-center mr-2 text-purple-800" />
            <p>Options are endless</p>
          </div>
          <div className="flex">
            <FaRegArrowAltCircleRight className="self-center mr-2 text-purple-800" />
            <p>Get the best deals</p>
          </div>
          <div className="flex">
            <FaRegArrowAltCircleRight className="self-center mr-2 text-purple-800" />
            <p>Instant Confirmation</p>
          </div>
          <div className="flex">
            <FaRegArrowAltCircleRight className="self-center mr-2 text-purple-800" />
            <p>It is super safe to book</p>
          </div>
        </div>
      </div>
      <Image
        src="/waterfall.jpg"
        alt="waterfall"
        className="hidden md:block absolute left-36 w-[340px] h-[458px] top-[-40px] border-4 border-white transform skew-x-[15deg] object-cover"
        width={240}
        height={420}
        unoptimized
      />
    </div>
  );
};

export default AboutUs;
