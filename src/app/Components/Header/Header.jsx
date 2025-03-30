import React from 'react';

export default function Header() {
  return (
    <>
      {/* Disclaimer */}
      <div className="h-auto bg-blue-400 flex flex-wrap items-center justify-center px-4 py-2 text-center gap-2 sm:gap-3">
        <div className="text-white font-medium text-xs sm:text-sm md:text-base text-center">
          Get the latest information from us about COVID-19
        </div>
        <button className="border-2 border-white text-white px-3 sm:px-4 rounded-md text-xs sm:text-sm">
          <a href="https://www.google.com">Learn More</a>
        </button>
      </div>
      {/* Disclaimer ends here */}

      {/* Header */}
      <div className="h-auto md:h-12 border-b-2 flex flex-wrap items-center justify-around px-4 md:px-10 py-2 bg-white">
        {/* Contact Info */}
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
          <div className="flex items-center text-xs sm:text-sm font-medium text-black cursor-pointer hover:text-blue-400 duration-300">
            <img src="/phone.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> +1234 123456
          </div>
          <div className="flex items-center text-xs sm:text-sm font-medium text-black cursor-pointer hover:text-blue-400 duration-300">
            <img src="/mail.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> care.[hospitalname]@gmail.com
          </div>
          <div className="hidden lg:flex items-center text-xs sm:text-sm font-medium text-black cursor-pointer hover:text-blue-400 duration-300">
            <img src="/location.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Rock Street, San Francisco, California
          </div>
        </div>

        {/* Social Icons */}
        <div className="w-full md:w-auto flex justify-center md:justify-end gap-3 mt-2 md:mt-0">
          {[
            { href: "https://www.facebook.com", img: "/facebook.png" },
            { href: "https://www.twitter.com", img: "/twitter.png" },
            { href: "https://www.instagram.com", img: "/insta.png" },
            { href: "https://www.google.com", img: "/google.png" },
            { href: "https://www.youtube.com", img: "/youtube.png" }
          ].map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 flex items-center justify-center rounded-md transition duration-300 hover:bg-gray-200">
                <img src={icon.img} alt="" className="w-4 h-4 cursor-pointer" />
              </div>
            </a>
          ))}

          {/* Search & Menu Icons */}
          <div className="w-8 h-8 flex items-center justify-center rounded-md transition duration-300 hover:bg-gray-200">
            <img src="/search.png" alt="Search" className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-md transition duration-300 hover:bg-gray-200 md:hidden">
            <img src="/menu.png" alt="Menu" className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Header ends here */}
    </>
  );
}


