import React from "react";
import ReactTyped from "react-typed";

const HeroSection = () => {
  return (
    <div className="text-[#14213d]">
      <div className="max-w-[800px] w-full mx-auto h-screen text-center flex flex-col justify-center mt-[-96px]">
        <p className="font-bold p-2">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6 text-[#fca311]">
          Grow with data
        </h1>
        <div className="flex items-center justify-center py-2">
          <p className="font-bold md:text-5xl sm:text-4xl text-xl">
            Fast, Flexible Financing for
          </p>
          <ReactTyped
            className="font-bold md:text-5xl sm:text-4xl text-xl pl-1 md:pl-2"
            strings={["JS", "BTB", "SASS"]}
            typeSpeed={100}
            backSpeed={90}
            loop
          />
        </div>
        <p className="text-lg md:text-xl font-bold text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. dicta.
        </p>
        <button className="bg-[#1343ac] text-white mx-auto py-2 w-[200px] my-6 rounded-md font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
