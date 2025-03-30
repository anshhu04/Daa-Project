import React from 'react';

export default function Facilities() {
  return (
    <>
              {/* Statistics Section */}
      <div className="flex items-center justify-center px-4 mt-20">
        <div className="w-full max-w-6xl bg-blue-900 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 text-center">
          {/* Stats Boxes */}
          {[
            { img: "/doctors.png", number: "200", label: "Doctors" },
            { img: "/community.png", number: "28,000+", label: "Happy Patients" },
            { img: "/beds.png", number: "900+", label: "Medical Beds" },
            { img: "/awards.png", number: "50+", label: "Awards" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt="" className="h-14 w-14 mx-auto mt-2" />
              <div className="mt-4 text-white text-3xl font-bold">{item.number}</div>
              <div className="mt-1 text-slate-300 text-lg font-bold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
