import React from 'react';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";

const Nav = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center">
        {/* Food Tuck Logo */}
        <div className=" flex justify-center lg:justify-start mb-4 lg:mb-0">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold ">
            Food <span className="text-orange-400 ">tuck</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="lg:order-2 flex flex-wrap justify-center lg:justify-center space-x-4 sm:space-x-6 text-white text-[12px] sm:text-base font-semibold">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/menu" className="hover:text-orange-400">Menu</Link>
          <Link href="/about" className="hover:text-orange-400">About</Link>
          <Link href="/shop" className="hover:text-orange-400">Shop</Link>
          <Link href="/signup" className="hover:text-orange-400">Sign Up</Link>
          <Link href="/signin" className="hover:text-orange-400">Sign In</Link>
        </div>

        {/* Icons */}
        <div className="lg:order-3 flex justify-center lg:justify-end space-x-6 mt-4 lg:mt-0 text-white text-2xl">
          <IoIosSearch className="hover:text-orange-400 cursor-pointer" />
          <GoPerson className="hover:text-orange-400 cursor-pointer" />
          <TbShoppingBag className="hover:text-orange-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
