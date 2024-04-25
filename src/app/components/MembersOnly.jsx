import React from "react";

const MembersOnly = () => {
  return (
    <div className="w-full bg-fuchsia-100 pt-8 pb-12 px-4 mt-12 text-center">
      <h2 className="font-bold text-[24px] text-fuchsia-600">Members Only</h2>
      <p className="font-medium text-[12px] max-w-[420px] mx-auto">
      Receive tailored offers, tips & travel ideas from World Flight Vibes. Dont worry, we dont spam and you can opt out at any time. Learn More
      </p>
      <div className="flex justify-center mt-4">
        <input type="text" placeholder="Jhndoe@eample.com" className="h-12 w-full md:w-[320px] px-4 rounded mr-4 self-center bg-violet-200"/>
        <button className="px-8 py-3 h-12 bg-fuchsia-600 text-white rounded text-[12px] font-medium self-center">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default MembersOnly;
