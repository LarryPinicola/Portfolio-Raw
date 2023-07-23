import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5">
        <div className="w-full shadow-xl flex flex-col my-9 rounded-lg hover:scale-105 duration-300 bg-[#e5e5e5]">
          <img
            src={single}
            alt=""
            className="w-24 h-24 p-3 mx-auto mt-[-3rem] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-5">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
          </div>
          <button className="text-[#e5e5e5] bg-[#14213d] mx-auto py-2 w-[200px] my-6 rounded-md font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col my-9 rounded-lg hover:scale-105 duration-300 bg-[#e5e5e5]">
          <img
            src={double}
            alt=""
            className="w-24 h-24 p-3 mx-auto mt-[-3rem] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-5">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
          </div>
          <button className="text-[#e5e5e5] bg-[#14213d] mx-auto py-2 w-[200px] my-6 rounded-md font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col my-9 rounded-lg hover:scale-105 duration-300 bg-[#e5e5e5]">
          <img
            src={triple} 
            alt=""
            className="w-24 h-24 p-3 mx-auto mt-[-3rem] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-5">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
            <p className="py-2 mx-8">Lorem, ipsum dolor.</p>
          </div>
          <button className="text-[#e5e5e5] bg-[#14213d] mx-auto py-2 w-[200px] my-6 rounded-md font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
