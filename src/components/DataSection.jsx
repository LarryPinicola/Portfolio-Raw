import React from "react";
import laptop from "../assets/laptop.jpg";

const DataSection = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto items-center">
        <img src={laptop} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#fca311]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            alias labore aperiam eius molestiae neque?
          </p>
          <button className="text-[#e5e5e5] bg-[#14213d] mx-auto md:mx-0 py-2 w-[200px] my-6 rounded-md font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
