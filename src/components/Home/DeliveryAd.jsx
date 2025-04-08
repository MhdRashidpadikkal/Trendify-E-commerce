import React from "react";
import catAd from "../../assets/deliver-to-you.png";

const DeliveryAd = () => {
  return (
    <div className="flex md:items-center bg-gray-100 sm:h-[360px] my-10 py-5 px-3 md:px-10 overflow-hidden rounded-md relative">
      <div className="w-3/4 flex flex-col gap-1.5 items-start md:px-0 lg:px-12 2xl:px-46 relative z-20 ">
        <p className="text-sm text-gray-500 text-nowrap">Order faster, get better quality.</p>
        <h2 className="text-4xl font-bold lg:text-5xl"> <span className="text-[#59A52C;]">TRENDIFY</span> <span className="text-nowrap">DELIVERS TO YOU</span></h2>
        <p className="font-semibold mt-2 w-[190px] sm:w-auto ">
          Get the latest fashion trends delivered right to your doorstep. Our
          team of experts curates the best
        </p>
        <button className="border border-black px-3 rounded-md font-semibold cursor-pointer py-1 mt-3">View more</button>
      </div>
      <div className="w-1/2 absolute right-0 bottom-0 sm:relative   sm:top-0 sm:left-0 ">
        <img src={catAd} alt="Delivery Ad" className="h-[100%] w-[100%]  md:h-[400px] lg:w-[500px] 2xl:w-[600px] " />
      </div>
    </div>
  );
};

export default DeliveryAd;
