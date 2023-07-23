import React from "react";

const Letter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-3xl sm:text-2xl text-lg text-[#fca311] font-bold py-2">
            Want tips & trips to optimize your flow?
          </h1>
          <p className="text-[#14213d]">
            Sign up to our newsletter and up to date
          </p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              className="p-2 flex w-full rounded-md text-black"
              placeholder="enter email"
            />
            <button className="bg-[#1343ac] text-white mx-auto py-2 w-[200px] my-6 px-2 ml-4 rounded-md font-medium">
              Notify Me!
            </button>
          </div>
          <p className="text-[#000]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus{" "}
            <span className="text-yellow-500">illo optio suscipit</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
