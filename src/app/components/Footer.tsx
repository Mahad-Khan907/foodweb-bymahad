import React from 'react';
import { PiClockClockwise } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black pt-3">
      <div className="flex flex-col md:flex-row justify-center items-center mt-24 px-4">
        <div className="text-center md:flex md:items-center">
          <h1 className="text-orange-500 font-bold text-[20px] sm:text-[25px] lg:text-[30px] flex justify-center items-center">
            St<p className="text-white">ill You Need Our Support?</p>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-8">
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="bg-yellow-600 placeholder-slate-50 text-black px-4 py-2 outline-none w-full sm:w-[250px] md:w-auto"
          />
          <button className="bg-white text-orange-600 text-center text-[12px] mt-2 md:mt-0 px-4 py-2 ml-0 md:ml-4 rounded-lg">
            Subscribe Now
          </button>
        </div>
      </div>

      <p className="text-[12px] sm:text-[14px] text-white font-normal text-center mt-6 md:mt-4 px-4 md:px-0">
        Don’t wait make a smart & logical quote here. It's pretty easy.
      </p>

      <div className="border-b-2 border-orange-600 mx-auto w-[90%] md:w-[800px] mt-10"></div>

      <div className="bg-black w-full md:w-[1350px] h-auto mt-10 px-4 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          <div className="text-white w-full sm:w-[320px] md:w-[400px]">
            <h1 className="text-[20px] sm:text-[25px] font-bold">About Us</h1>
            <p className="text-[12px] sm:text-[14px] leading-6 mt-4">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable,
              safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="p-3 px-4 rounded-md bg-orange-500 flex items-center justify-center">
                <PiClockClockwise className="text-3xl" />
              </div>
              <div>
                <h1 className="text-[14px] sm:text-[16px]">Opening Hours</h1>
                <span className="text-[12px] sm:text-[14px]">Mon - Sat (8.00 - 6.00) <br /> Sunday - Closed</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 md:gap-20">
            <ul className="text-white text-[12px] sm:text-[14px] leading-8">
              <li className="font-bold">Useful Links</li>
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
            <ul className="text-white text-[12px] sm:text-[14px] leading-8">
              <li className="font-bold">Help?</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="w-full sm:w-[320px] md:w-[400px]">
            <h1 className="font-bold text-white text-[20px] sm:text-[25px]">Recent Posts</h1>
            <img src="card (1).png" alt="Post 1" className="mt-4 w-full md:w-auto" />
            <img src="card (2).png" alt="Post 2" className="mt-4 w-full md:w-auto" />
            <img src="card (3).png" alt="Post 3" className="mt-4 w-full md:w-auto" />
          </div>
        </div>

        <div className="bg-gray-500 w-full h-auto mt-10 px-4 sm:px-10 md:px-20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center px-4">
            <h1 className="text-white text-center text-[14px] sm:text-[16px]">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </h1>
            <img src="social.png" alt="Social Media" className="mt-4 md:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
