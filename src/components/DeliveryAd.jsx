import React from "react";
import catAd from "../assets/deliver-to-you.png";

const DeliveryAd = () => {
  return (
    <div className="flex md:items-center bg-gray-100 h-[450px] sm:h-[360px] my-10 py-5 px-3 md:px-10 overflow-hidden">
      <div className="w-1/2 flex flex-col gap-1.5 items-start md:px-0 lg:px-12 2xl:px-46 ">
        <p className="text-sm text-gray-500">Order faster, get better quality.</p>
        <h2 className="text-4xl font-bold lg:text-5xl"> <span className="text-[#59A52C;]">TRENDIFY</span> DELIVERS TO YOU</h2>
        <p className="font-semibold mt-2">
          Get the latest fashion trends delivered right to your doorstep. Our
          team of experts curates the best
        </p>
        <button className="border border-black px-3 rounded-md font-semibold cursor-pointer py-1 mt-3">View more</button>
      </div>
      <div className="w-1/2 relative top-20 left-10 sm:top-0 sm:left-0 ">
        <img src={catAd} alt="Delivery Ad" className="w-[450px] h-[380px] md:h-[400px] lg:w-[500px] 2xl:w-[600px] " />
      </div>
    </div>
  );
};

export default DeliveryAd;
