import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="h-28 flex items-center justify-between px-6 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="" className="h-16 w-16 cursor-pointer" />
          <div className="block">
            <div className="font-extrabold font-serif text-3xl sm:text-4xl lg:text-5xl cursor-pointer">
              Cure<span className="text-blue-500">Well</span>
            </div>
            <div className="font-semibold font-serif text-sm sm:text-lg text-right cursor-pointer -mt-1">
              Hospital
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-7">
          <ul className="flex space-x-7 font-bold">
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              HOME
            </li>
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              ABOUT
            </li>
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              SERVICES
            </li>
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              PAGES
            </li>
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              BLOG
            </li>
            <li className="hover:text-blue-500 duration-300 cursor-pointer text-black">
              CONTACT
            </li>
          </ul>
          <button className="bg-blue-700 text-white font-bold px-5 py-2 rounded-md text-sm hover:bg-blue-500 duration-300">
            GET APPOINTMENT
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <img src="/menu.png" alt="menu" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </>
  );
}
