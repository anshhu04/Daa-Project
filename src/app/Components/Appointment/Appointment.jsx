import React from 'react';

export default function Appointment() {
  return (
    <>
      {/* Appointment Form Section */}
      <div className="bg-slate-100 flex flex-col lg:flex-row mt-20">
        {/* Left Side Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
        <img src="/hero_section.jpg" alt="Hero Section" className="h-[100%] w-[100%]" />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 p-8">
          <h2 className="text-blue-800 text-lg font-bold">CONTACT US</h2>
          <h1 className="text-3xl font-bold mt-4">Make an Appointment</h1>
          <p className="text-xl text-slate-600 mt-4">We will send you a confirmation within 24 hours.</p>
          <p className="text-xl text-slate-600">Emergency? Call 1-2554-2356-33</p>

          {/* Form */}
          <form className="mt-8 space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Your Name</label>
                <input type="text" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Your Email</label>
                <input type="email" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your email address" />
              </div>
            </div>

            {/* Phone Number & Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Phone Number</label>
                <input type="number" className="w-full border p-2 mt-1 text-lg" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Sex</label>
                <div className="flex items-center gap-4 mt-1">
                  <label><input type="radio" name="gender" className="mr-1" /> Male</label>
                  <label><input type="radio" name="gender" className="mr-1" /> Female</label>
                  <label><input type="radio" name="gender" className="mr-1" /> Other</label>
                </div>
              </div>
            </div>

            {/* Select Doctor */}
            <div>
              <label className="text-lg font-medium text-gray-700">Select a Doctor</label>
              <input list="doctors" className="w-full p-2 border text-lg mt-1" placeholder="Type to search..." />
              <datalist id="doctors">
                <option value="Dr. Sanjay Gupta" />
                <option value="Dr. Susan Love" />
                <option value="Dr. Ben Carson" />
                <option value="Dr. Gagandeep Kang" />
              </datalist>
            </div>

            {/* Appointment Date & Medications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium text-gray-700">Date of Appointment</label>
                <input type="date" className="w-full border p-2 mt-1 text-lg" />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Taking Any Medications?</label>
                <div className="flex items-center gap-4 mt-1">
                  <label><input type="radio" name="medication" className="mr-1" /> Yes</label>
                  <label><input type="radio" name="medication" className="mr-1" /> No</label>
                </div>
              </div>
            </div>

            {/* Medications Description */}
            <div>
              <label className="text-lg font-medium text-gray-700">If Yes, Please list it...</label>
              <textarea className="w-full min-h-24 border p-2 text-lg mt-1"></textarea>
            </div>

            {/* Submit Button */}
            <button className="bg-blue-700 text-white font-bold px-5 rounded-md text-sm hover:bg-blue-500 duration-300 h-12 w-52 mt-4">
                  BOOK APPOINTMENT
                </button>   
          </form>
        </div>
      </div>
    </>
  );
}
