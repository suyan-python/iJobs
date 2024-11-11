import React from "react";

function AboutUs() {
  return (
    <div className="pt-36 bg-gradient-to-t from-blue-800 via-blue-900 to-gray-900">
      <div className="text-center font-bold text-5xl text-blue-400">
        Behind the Business
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-6">
        {/* Card 1 */}
        <div className="bg-suyan bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>

          {/* Title Section */}
          <div className="relative z-30 p-4">
            <div className="title font-semibold text-xl ">Suyan Man Amatya</div>
          </div>

          {/* Description Section */}
          <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
            <div className="description  p-4">
              Discover the latest trends in the coffee world, from brewing
              methods to flavors.
            </div>
          </div>
        </div>

        {/* Repeat for Additional Cards */}
        <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
          <div className="relative z-30 p-4">
            <div className="title font-semibold text-xl ">Bimal Thapa</div>
          </div>
          <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
            <div className="description  p-4 ">
              Explore new and exciting coffee recipes from around the world.
            </div>
          </div>
        </div>

        <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
          <div className="relative z-30 p-4">
            <div className="title font-semibold text-xl ">Rupesh Silwal</div>
          </div>
          <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
            <div className="description  p-4 ">
              Learn about the cultural significance of coffee across different
              regions.
            </div>
          </div>
        </div>

        <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-70 z-20"></div>
          <div className="relative z-30 p-4">
            <div className="title font-semibold text-xl ">Bayapak Chudali</div>
          </div>
          <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
            <div className="description  p-4 ">
              Discover sustainable practices in coffee production.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
