import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = () => {
  return (
    <div className="shadow-lg cursor-pointer p-4 sm:p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-full sm:max-w-lg mx-auto">
      <div className="mb-3 sm:mb-4">
        <h1 className="font-semibold text-lg sm:text-xl text-gray-800">
          Company Name
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">Nepal</p>
      </div>
      <div>
        <h1 className="font-bold text-md sm:text-lg my-2 text-gray-800">
          Job Title
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Join our team and be part of an exciting journey to create something
          great together.
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
        <Badge className="text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full">
          12 Positions
        </Badge>
        <Badge className="text-red-600 font-medium bg-red-100 px-2 sm:px-3 py-1 rounded-full">
          Part Time
        </Badge>
        <Badge className="text-blue-600 font-medium bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
          24 L
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
