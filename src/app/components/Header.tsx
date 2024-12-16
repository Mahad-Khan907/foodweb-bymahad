import React from 'react';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="bg-black w-full h-auto">
      <h3 className="text-orange-500 py-7 font-bold flex justify-center text-center text-xl md:text-2xl">
        Food <span className="text-white">tuck</span>
      </h3>

      {/* Navigation Section */}
      <header className="flex flex-wrap justify-between items-center text-white text-sm md:text-base px-6 md:px-28">
        <div className="flex space-x-4 md:space-x-8">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </div>

        {/* Search and Cart Section */}
        <div className="flex items-center space-x-2 mt-4 md:mt-4">
          <input
            type="text"
            id="name"
            placeholder="Search..."
            className="bg-black outline-none rounded-xl text-sm md:text-base text-white px-2 py-1 w-36 md:w-48 border border-orange-400"
          />
          <IoSearchOutline className="text-xl text-slate-300 cursor-pointer" />
          <HiOutlineShoppingBag className="text-xl cursor-pointer" />
        </div>
      </header>

      <div className="mb-36">
        <div className="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Hero Text */}
          <div className="text-center md:text-left px-6 md:ml-40 md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-orange-500 font-bold text-3xl md:text-5xl">
                Th<span className="text-white">e</span>
              </h1>
              <h1 className="text-white font-bold ml-3 text-3xl md:text-5xl">
                Art of Speed
              </h1>
            </div>
            <h1 className="text-white font-bold text-3xl md:text-5xl mt-2">
              food Quality
            </h1>
            <p className="text-white text-sm md:text-base mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Temporibus placeat, nostrum tempora dicta.
            </p>
            <button className="bg-yellow-500 text-white text-xs md:text-sm mt-6 px-6 py-2 rounded-3xl">
              See Menu
            </button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end md:w-1/2 mt-6 md:mt-0">
            <img
              src="main-image.png"
              alt="bg"
              className="w-80 md:w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
