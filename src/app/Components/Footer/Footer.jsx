import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Main Section */}
      <div className="bg-slate-800 px-4 md:px-8 py-10 flex flex-wrap justify-center items-center gap-8">
        
        {/* First Box (Hospital Info) */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16 cursor-pointer" />
            <div>
              <div className="font-extrabold font-serif text-2xl sm:text-3xl text-white">
                Cure<span className="text-slate-400">Well</span>
              </div>
              <div className="font-semibold font-serif text-sm sm:text-lg text-white">
                Hospital
              </div>
            </div>
          </div>
          <p className="text-white mt-4 text-sm sm:text-base leading-relaxed max-w-sm">
            At CureWell Hospital, we provide world-class healthcare with compassion and excellence. Equipped with advanced technology and a skilled medical team, we ensure the best possible care for our patients.
          </p>
        </div>

        {/* Second Box (Recent Posts) */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="text-white font-bold text-lg sm:text-xl mb-4">
            | <span>Recent Posts</span>
          </div>
          {[ 
            { img: "/child.jpeg", title: "Health Tips for Children", date: "Feb 08, 2025" },
            { img: "/hero_section.jpg", title: "Know About Doctor", date: "Feb 08, 2025" }
          ].map((post, index) => (
            <div key={index} className="flex items-center gap-3 mb-4">
              <img src={post.img} alt="" className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-md" />
              <div className="text-white text-sm sm:text-base">
                {post.title}
                <div className="flex items-center mt-1 text-xs sm:text-sm">
                  <img src="/calender.png" alt="" className="h-4 w-4" />
                  <span className="ml-2">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Box (Tags) */}
        <div className="w-full sm:w-1/2 lg:w-1/4 text-white">
          <div className="text-white font-bold text-lg sm:text-xl mb-4">
            | <span>Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Dental Care", "Disease", "General Surgery", "Health", "Medicine",
              "Mental Health", "Neurology", "Orthopedic", "Pharmacy", "Technology"
            ].map((tag, index) => (
              <button 
                key={index} 
                className="border border-white py-1 px-3 text-xs sm:text-sm rounded-full hover:bg-blue-400 transition duration-300 hover:border-blue-400 hover:ease-in-out"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer (Social Media Icons) */}
      <div className="bg-slate-700 py-6 flex justify-center items-center">
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { href: "https://www.facebook.com", img: "/facebook.png" },
            { href: "https://www.twitter.com", img: "/twitter.png" },
            { href: "https://www.instagram.com", img: "/insta.png" },
            { href: "https://www.google.com", img: "/google.png" },
            { href: "https://www.youtube.com", img: "/youtube.png" }
          ].map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gray-100 transition">
                <img src={icon.img} alt="" className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
