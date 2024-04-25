import Image from "next/image";
import React from "react";

const BLOGS_LIST = [
  {
    headline: "Cheap flights by destinations",
    imgPath: "/tourist1.webp",
    para: "To find the right air ticket for your trip, just enter the location you are flying from and your flight destination. Enter your dates, class of travel and the number of passengers. Select Search flights to continue with the online flight booking process and book a flight ticket that suits your travel plans.",
  },
  {
    headline: "Thanks Flight Vibesns",
    imgPath: "/tourist1.webp",
    para: "To find the right air ticket for your trip, just enter the location you are flying from and your flight destination. Enter your dates, class of travel and the number of passengers. Select Search flights to continue with the online flight booking process and book a flight ticket that suits your travel plans.",
  },
  {
    headline: "Easliy find your perfect flight",
    imgPath: "/tourist1.webp",
    para: "To find the right air ticket for your trip, just enter the location you are flying from and your flight destination. Enter your dates, class of travel and the number of passengers. Select Search flights to continue with the online flight booking process and book a flight ticket that suits your travel plans.",
  },
  {
    headline: "Top 10 Places to visit",
    imgPath: "/tourist1.webp",
    para: "To find the right air ticket for your trip, just enter the location you are flying from and your flight destination. Enter your dates, class of travel and the number of passengers. Select Search flights to continue with the online flight booking process and book a flight ticket that suits your travel plans.",
  },
];

const OurBlog = () => {
  return (
    <div className="mt-[40px] md:mt-[340px] w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-[32px]">Our Blogs</h2>
        <p className="font-medium text-[17px] mt-[-6px]">Lets explore more</p>
      </div>
      <div className="block md:flex mt-10">
        <div className="w-full md:w-[46%]">
          <Image
            src="/flight.jpg"
            alt="flight"
            className="w-full rounded"
            width={220}
            height={420}
            unoptimized
          />
          <h4 className="font-bold my-3">Overseas Highways</h4>
          <p className="font-medium text-[13px] text-justify">
            To find the right air ticket for your trip, just enter the location
            you are flying from and your flight destination. Enter your dates,
            class of travel and the number of passengers. Select Search flights
            to continue with the online flight booking process and book a flight
            ticket that suits your travel plans.
          </p>
          <p className="font-bold text-[13px] mt-2 text-blue-800 cp">
            Read more
          </p>
        </div>

        <div className="mx-0 md:mx-8 w-full md:w-[54%] mt-8 md:mt-0">
          {BLOGS_LIST.map((blog, i) => {
            return (
              <div className="flex mb-3" key={i}>
                <Image
                  src={blog.imgPath}
                  alt="tourist1"
                  className="h-[120px] w-[120px] rounded"
                  width={120}
                  height={120}
                  unoptimized
                />
                <div className="ml-6">
                  <h6 className="font-bold">{blog.headline} </h6>
                  <p className="font-medium text-[12px] max-w-[480px] text-justify line-clamp-3 overflow-ellipsis">
                    {blog.para}
                  </p>
                  <p className="font-bold text-[13px] mt-2 text-blue-800 cp">
                    Read more
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
