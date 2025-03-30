import React from 'react';

export default function Doctors() {
  return (
    <>
      <div className="h-auto">
        <div className="pt-20 text-blue-800 font-sans font-bold flex justify-center text-lg md:text-xl">
          MEET OUR TEAM
        </div>
        <div className="text-3xl md:text-4xl font-bold font-serif mt-4 flex justify-center text-center">
          Specialist Doctors
        </div>
        <div className="mt-4 flex justify-center text-center text-slate-600 font-normal text-base md:text-lg px-4 md:px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae eligendi corporis?
        </div>

        {/* Doctors Grid */}
        <div className="h-auto mt-12 flex flex-wrap justify-center gap-8">
          {/* First box */}
          <div className="h-[470px] w-[18%] min-w-[280px] rounded-t-md bg-slate-100 shadow-lg shadow-gray-400/40">
            <img src="/doctor_5.webp" alt="" className="h-[350px] w-full rounded" />
            <div className="h-12 w-56 rounded-r-md bg-blue-800 absolute -mt-6 flex items-center text-white font-bold justify-center text-sm cursor-pointer hover:bg-blue-600 duration-300 hover:rounded-md">
              <img src="/plus_1.png" alt="" className="h-8 w-8" /> BOOK APPOINTMENT
            </div>
            <div className="text-center">
              <div className="font-sans font-bold text-lg mt-10">Dr. Sanjay Gupta</div>
              <div className="text-slate-700 mt-1">MBBS, Cardiology (DM)</div>
            </div>
          </div>

          {/* Second Box */}
          <div className="h-[470px] w-[18%] min-w-[280px] rounded-t-md bg-slate-100 shadow-lg shadow-gray-400/40">
            <img src="/doctor_1.webp" alt="" className="h-[350px] w-full rounded" />
            <div className="h-12 w-56 rounded-r-md bg-blue-800 absolute -mt-6 flex items-center text-white font-bold justify-center text-sm cursor-pointer hover:bg-blue-600 duration-300 hover:rounded-md">
              <img src="/plus_1.png" alt="" className="h-8 w-8" /> BOOK APPOINTMENT
            </div>
            <div className="text-center">
              <div className="font-sans font-bold text-lg mt-10">Dr. Susan Love</div>
              <div className="text-slate-700 mt-1">MBBS, Oncology (MD/DM)</div>
            </div>
          </div>

          {/* Third Box */}
          <div className="h-[470px] w-[18%] min-w-[280px] rounded-t-md bg-slate-100 shadow-lg shadow-gray-400/40">
            <img src="/doctor_2.webp" alt="" className="h-[350px] w-full rounded" />
            <div className="h-12 w-56 rounded-r-md bg-blue-800 absolute -mt-6 flex items-center text-white font-bold justify-center text-sm cursor-pointer hover:bg-blue-600 duration-300 hover:rounded-md">
              <img src="/plus_1.png" alt="" className="h-8 w-8" /> BOOK APPOINTMENT
            </div>
            <div className="text-center">
              <div className="font-sans font-bold text-lg mt-10">Dr. Ben Carson</div>
              <div className="text-slate-700 mt-1">MBBS, Neurology (DM)</div>
            </div>
          </div>

          {/* Fourth box */}
          <div className="h-[470px] w-[18%] min-w-[280px] rounded-t-md bg-slate-100 shadow-lg shadow-gray-400/40">
            <img src="/doctor_4.webp" alt="" className="h-[350px] w-full rounded" />
            <div className="h-12 w-56 rounded-r-md bg-blue-800 absolute -mt-6 flex items-center text-white font-bold justify-center text-sm cursor-pointer hover:bg-blue-600 duration-300 hover:rounded-md">
              <img src="/plus_1.png" alt="" className="h-8 w-8" /> BOOK APPOINTMENT
            </div>
            <div className="text-center">
              <div className="font-sans font-bold text-lg mt-10">Dr. Gagandeep Kang</div>
              <div className="text-slate-700 mt-1">MBBS, Endocrinology (DM)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

