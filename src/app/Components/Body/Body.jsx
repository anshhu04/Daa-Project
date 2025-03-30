import React from 'react';

export default function Body() {
  return (
    <>
      <div className="mt-24 flex justify-center px-4">
        <div className="max-w-6xl w-full flex flex-wrap items-center">
          
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-blue-800 font-bold">WHO WE ARE</div>
            <div className="font-bold font-sans text-4xl sm:text-5xl mt-5">Choose The Best Care</div>
            <div className="font-bold font-sans text-4xl sm:text-5xl mt-3">For Yourself</div>
            <div className="font-sans text-lg sm:text-xl font-semibold mt-7">
              We offer reasonable pricing health care plans, insurance packages to clients.
            </div>
            <div className="mt-4 font-sans text-base sm:text-lg text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum reprehenderit veniam ex commodi ab earum fugiat beatae iure mollitia. Aliquam nisi soluta nesciunt nihil dicta dignissimos ipsam veniam modi repellendus magni.
            </div>

            {/* Doctor Info */}
            <div className="flex items-center mt-6">
              <img src="/doctor.jpg" alt="Doctor" className="h-20 w-20 sm:h-32 sm:w-32 rounded-md" />
              <div className="ml-4 text-lg font-bold text-blue-950">
                Dr. Aryan Malhotra
                <div className="font-normal text-black text-sm sm:text-base">
                  (Chairman and Founder)
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Balanced Size with Left Section) */}
          <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0 flex justify-center">
            <img 
              src="body_image.webp" 
              alt="Body" 
              className="w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] rounded-md"
            />
          </div>

        </div>
      </div>
    </>
  );
}
