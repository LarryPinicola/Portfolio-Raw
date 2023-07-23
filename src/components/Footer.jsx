import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 grid items-center px-4 lg:grid-cols-3 gap-8 text-gray-500">
      <div className="">
        <h1 className="w-full text-3xl font-bold text-[#14213d]">Lemondio</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          adipisci blanditiis praesentium, officiis consequuntur sint!
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-black ">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="flex justify-between lg:col-span-2">
        <div className="">
          <h5 className="font-medium text-yellow-500">Solutions</h5>
          <ul className="">
            <li className=" py-2 text-sm">Analytic</li>
            <li className=" py-2 text-sm">Marketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div className="">
          <h5 className="font-medium text-yellow-500">Solutions</h5>
          <ul className="">
            <li className=" py-2 text-sm">Analytic</li>
            <li className=" py-2 text-sm">Marketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div className="">
          <h5 className="font-medium text-yellow-500">Solutions</h5>
          <ul className="">
            <li className=" py-2 text-sm">Analytic</li>
            <li className=" py-2 text-sm">Marketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div className="">
          <h5 className="font-medium text-yellow-500">Solutions</h5>
          <ul className="">
            <li className=" py-2 text-sm">Analytic</li>
            <li className=" py-2 text-sm">Marketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
