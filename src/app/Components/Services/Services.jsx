import React from 'react';

export default function Services() {
  return (
    <>
      <div className="h-auto bg-slate-100 mt-24 px-4 md:px-8 lg:px-16 py-16">
        <div className="pt-12 text-blue-800 font-sans font-bold flex justify-center text-lg md:text-xl">
          OUR SERVICES
        </div>
        <div className="text-3xl md:text-4xl font-bold font-serif mt-4 flex justify-center text-center">
          What We Offer for You
        </div>
        <div className="mt-4 flex justify-center text-center text-slate-600 font-normal text-base md:text-lg px-4 md:px-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae eligendi corporis?
        </div>

        {/* First row */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
          {/* First box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/heart.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">Heart Diseases</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>

          {/* Second box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/pharmacy.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">Pharmacy</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>

          {/* Third box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/stethescope.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">Orthopedic</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-8">
          {/* First box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/lung.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">Lung Diseases</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>

          {/* Second box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/hand.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">Sport Injury</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>

          {/* Third box */}
          <div className="h-[320px] w-[25%] min-w-[280px] rounded-md hover:bg-slate-200 duration-300 p-4">
            <img src="/Scissors.png" alt="" className="h-14 mt-2" />
            <div className="font-bold font-sans text-xl mt-4">General Surgery</div>
            <div className="text-slate-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste quisquam ratione amet, necessitatibus qui laboriosam non laborum.
            </div>
            <div className="flex text-blue-500 mt-4 items-center font-bold cursor-pointer">
              Learn More <span><img src="/arrow.png" alt="" className="h-6 w-6 ml-2" /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

