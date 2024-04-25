import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const LEFT_LINK = [
  {
    value: "Home",
    url: "",
  },
  {
    value: "Flights",
    url: "",
  },
  {
    value: "Hotel",
    url: "",
  },
  {
    value: "Flash Deals",
    url: "",
  },
  {
    value: "Destinations",
    url: "",
  },
  {
    value: "Promotions",
    url: "",
  },
  {
    value: "Help",
    url: "",
  },
  {
    value: "Sign in / Sign up",
    url: "",
  },
];

const RIGHT_LINK = [
  {
    value: "About",
    url: "",
  },
  {
    value: "Testimonials",
    url: "",
  },
  {
    value: "Rewards",
    url: "",
  },
  {
    value: "Blogs",
    url: "",
  },
  {
    value: "Meet the team",
    url: "",
  },
  {
    value: "Work with us",
    url: "",
  },
  {
    value: "FAQ",
    url: "",
  },
  {
    value: "Privacy Policy",
    url: "",
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full h-[100px] flex px-[5%] bg-black">
        <div className="text-white text-[20px] self-center">
          Booking is safe with us! We are best in industry
        </div>
        <div></div>
      </div>
      <div className="flex w-[90%] mx-auto">
        <div className="block md:flex w-full mt-4">
          <div className="w-[100%] md:w-[26%] mr-24">
            <h4 className="font-bold text-[20px] text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
              Need Any Help
            </h4>
            <div className="border-l-8 border-blue-900 pl-3 my-6">
              <p className="text-[14px] font-bold">Call 24/1 for any help</p>
              <p className="text-[20px] font-bold">+ 4154 2231325631</p>
            </div>
            <div className="border-l-8 border-blue-900 pl-3 my-6">
              <p className="text-[14px] font-bold">Mail to our support team</p>
              <p className="text-[20px] font-bold">support@flightvibes.com</p>
            </div>
            <div className="border-l-8 border-blue-900 pl-3 my-6">
              <p className="text-[14px] font-bold">Connect us on</p>
              <div className="text-[20px] font-bold flex mt-2">
                <FaFacebook className="mr-3" />
                <FaInstagram className="mr-3" />
                <FaYoutube className="mr-3" />
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[26%] mr-20">
            <h4 className="font-bold text-[20px] text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
              Usefull Links
            </h4>
            <div className="flex">
              <div className="w-1/2">
                {LEFT_LINK.map((link, id) => {
                  return (
                    <p className="text-[14px] font-bold mb-[5px] cp" key={id}>
                      {link.value}
                    </p>
                  );
                })}
              </div>
              <div className="w-1/2 ml-20">
                {RIGHT_LINK.map((link, id) => {
                  return (
                    <p className="text-[14px] font-bold mb-[5px] cp" key={id}>
                      {link.value}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[35%] mt-2">
            <Image
              src="/debitCard.png"
              alt="debitCard"
              className="w-full h-[140px] ml-[-28px] rounded object-cover"
              width={220}
              height={420}
              unoptimized
            />
            <h4 className="font-bold text-[20px] text-blue-900 border-b-2 border-blue-900 mt-4 pb-2 mb-2">
              Need Assistance?
            </h4>
            <p className="font-medium text-[14px]">
              For reservation and booking. Our team of experienced travel agents
              are 24/7 at your service to help you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] mx-auto mt-4 mb-4">
        <p className="text-[14px] text-justify font-medium text-gray-600 ">
          Many of the flights and flight-inclusive holidays on lowcostvibes.com
          which depart from the UK are financially protected by the ATOL scheme.
          Please ask us to confirm what protection may apply to your booking. If
          you do not receive an ATOL Certificate then the booking will not be
          ATOL protected. If you do receive an ATOL Certificate but all the
          parts of your trip are not listed on it, those parts will not be ATOL
          protected. This website is intended primarily to residents of the UK.
          Please see our terms and conditions for information, or for more
          information about financial protection and the ATOL Certificate go to:
          www.atol.org.uk/ATOLCertificate.
        </p>
      </div>
      <div className="flex justify-between font-bold text-[14px] pt-2 border-t-2 border-blue-900 mb-2 w-[96%] md:w-[90%] mx-auto">
        <p>Powered by Techneapp</p>
        <p>
          @2023 Vibes Group UK. All right reserverd. Trading as Flight Vibes
        </p>
      </div>
    </>
  );
};

export default Footer;
