'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero_section() {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="bg-slate-200 min-h-[650px] flex flex-col lg:flex-row items-center">
          {/* Left Section (Text) */}
          <div className="w-full lg:w-[60%] flex items-center justify-center px-6 lg:px-20 text-center lg:text-left">
            <div className="h-auto w-full max-w-[650px]">
              <div className="font-serif font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-950  ">
                Take the world's best
              </div>
              <div className="font-serif font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-950 mt-4">
                Quality Treatment
              </div>
              <div className="mt-6 text-lg md:text-xl font-serif font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                earum, deleniti nulla rerum quisquam, placeat mollitia
                perferendis inventore nisi porro recusandae nemo!
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button onClick={()=>{router.push('/contact')}} className="bg-blue-700 text-white font-bold px-5 rounded-md text-sm hover:bg-blue-500 duration-300 h-12 w-40">
                  CONTACT NOW
                </button>
                <button className="text-blue-700 font-bold border-2 border-blue-700 px-5 rounded-md text-sm hover:bg-blue-700 hover:text-white duration-300 h-12 w-36">
                  MORE INFO
                </button>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <img src="/hero_section.jpg" alt="" className="w-full lg:w-auto" />
          </div>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 -mt-20">
        {/* First Box */}
        <div className="bg-blue-800 h-auto w-full sm:w-[380px] flex items-center justify-center rounded-md p-6">
          <div className="text-center">
            <img src="/emergency call.png" alt="" className="h-14 w-14 mx-auto mt-2" />
            <div className="text-white font-serif font-bold text-xl mt-3">
              Emergency Cases
            </div>
            <div className="text-white font-extralight">.........................</div>
            <div className="text-white mt-3 font-serif font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <button className="text-white font-bold border-2 border-white px-5 rounded-md text-sm hover:bg-white hover:text-black duration-300 h-12 w-44 mt-6">
              SEE SERVICES
            </button>
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-blue-700 h-auto w-full sm:w-[380px] flex items-center justify-center rounded-md p-6">
          <div className="text-center">
            <img src="/heartbeat.png" alt="" className="h-14 w-14 mx-auto mt-2" />
            <div className="text-white font-serif font-bold text-xl mt-3">
              Primary Care
            </div>
            <div className="text-white font-extralight">.........................</div>
            <div className="text-white mt-3 font-serif font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <button className="text-white font-bold border-2 border-white px-5 rounded-md text-sm hover:bg-white hover:text-black duration-300 h-12 w-44 mt-6">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Third Box */}
        <div className="bg-blue-800 h-auto w-full sm:w-[380px] flex items-center justify-center rounded-md p-6">
          <div className="text-center">
            <img src="/timing.png" alt="" className="h-14 w-14 mx-auto mt-2" />
            <div className="text-white font-serif font-bold text-xl mt-3">
              Opening Hours
            </div>
            <div className="text-white font-extralight">.........................</div>
            <div className="text-white mt-3 font-serif font-medium text-base">
              Monday – Friday <br /> 8:00am – 7:00pm
            </div>
            <div className="text-white font-extralight">........................................</div>
            <div className="text-white mt-3 font-serif font-medium text-base">
              Saturday <span className="block sm:inline ml-2">7:30am – 4:00pm</span>
            </div>
            <div className="text-white font-extralight">........................................</div>
            <div className="text-white mt-3 font-serif font-medium text-base">
              Sunday <span className="block sm:inline ml-2">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

