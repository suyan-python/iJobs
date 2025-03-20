import React from "react";

function AboutUs() {
  return (
    <div className="pt-36 bg-gradient-to-t from-blue-800 via-blue-900 to-gray-900">
      <div className="text-center font-bold text-5xl text-blue-400 mb-12">
        Behind the Business
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-6">
        {/* 2x2 Grid */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
          <div className="bg-suyan bg-cover text-white h-96 p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-105">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>

            {/* Title Section */}
            <div className="relative z-30 p-6">
              <div className="title font-semibold text-2xl text-blue-100 hover:text-white transition-colors duration-300">
                Suyan Man Amatya
              </div>
            </div>

            {/* Description Section */}
            <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-32 z-30">
              <div className="description p-4">
                Suyan is dedicated to empowering both job seekers and recruiters
                by creating an easy-to-use platform that connects talent with
                opportunity. His vision is to simplify the job search and hiring
                process.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
          <div className="bg-bimal bg-cover text-white h-96 p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
            <div className="relative z-30 p-6">
              <div className="title font-semibold text-2xl text-blue-100 hover:text-white transition-colors duration-300">
                Bimal Thapa
              </div>
            </div>
            <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-32 z-30">
              <div className="description p-4">
                Bimal brings his expertise in technology and user experience to
                ensure a seamless, responsive, and intuitive platform for both
                job seekers and employers.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
          <div className="bg-rupesh bg-cover text-white h-96 p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
            <div className="relative z-30 p-6">
              <div className="title font-semibold text-2xl text-blue-100 hover:text-white transition-colors duration-300">
                Rupesh Silwal
              </div>
            </div>
            <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-32 z-30">
              <div className="description p-4">
                Rupesh focuses on ensuring the platform is both accessible and
                efficient, offering advanced features to enhance job search
                capabilities and job postings, benefiting users across all
                sectors.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
          <div className="bg-bayapak bg-cover text-white h-96 p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
            <div className="relative z-30 p-6">
              <div className="title font-semibold text-2xl text-blue-100 hover:text-white transition-colors duration-300">
                Bayapak Chudali
              </div>
            </div>
            <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-32 z-30">
              <div className="description p-4">
                Bayapak is dedicated to enhancing the job portal’s features,
                ensuring it is always up to date with the latest trends and
                technologies, providing a smooth and efficient experience for
                both job seekers and recruiters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
