import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="text-[#14213d] flex justify-between items-center max-w-[1024px] px-5 h-20 mb-10">
      <h1 className="text-3xl font-bold w-full">
        Larry
        {/* <span className="text-[#fca311]">Lemondio</span> */}
      </h1>
      <ul className="hidden md:flex md:items-center">
        <li className="p-3">Home</li>
        <li className="p-3">Company</li>
        <li className="p-3">Resources</li>
        <li className="p-3">About</li>
        <li className="p-3">Contact</li>
      </ul>

      <div className="block md:hidden lg:hidden" onClick={handleClick}> 
        {!show ? <BiMenu size={30} /> : <IoMdClose size={30} />}
      </div>

      <div
        className={
          show
            ? "fixed top-0 left-0 w-[40%] h-full bg-gray-300 ease-in-out duration-300"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="text-3xl font-bold w-full m-4">
          Larry
          {/* <span className="text-[#fca311]">Lemondio</span> */}
        </h1>
        <ul className="m-2">
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resources</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
