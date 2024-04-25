import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ_QUESTIONS = [
  {
    heading: "When is the best time to buy plane tickets",
    description: "",
  },
  {
    heading: "How can i save on airline tickets?",
    description: "",
  },
  {
    heading: "What are best tips for booking cheap flights",
    description: "",
  },
  {
    heading: "How can i save money I fly often",
    description: "",
  },
  {
    heading: "How do i get  best airfare prices?",
    description: "",
  },
  {
    heading: "Is booking a multi-city flights cheaper",
    description: "",
  },
];

const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto mt-12 md:mt-4">
      <h2 className="text-[28px] md:text-[22px] font-bold">Frequently asked questions</h2>
      <div className="flex flex-wrap justify-between font-medium text-[14px] mt-8">
        {FAQ_QUESTIONS.map((singleFAQ, id) => (
          <div
            className="bg-gray-200 w-full md:w-[49%] mr-1 mb-1 px-2 h-12 flex justify-between"
            key={id}
          >
            <p className="self-center">{singleFAQ.heading}</p>
            <IoIosArrowDown className="self-center mr-4 text-[18px]" />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-800 text-white py-3 px-12 text-[12px] rounded">More FAQ</button>
      </div>
    </div>
  );
};

export default FAQ;
