import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = ({ job }) => {
  return (
    <div className="shadow-lg cursor-pointer p-4 sm:p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-full sm:max-w-lg mx-auto">
      <div className="mb-3 sm:mb-4">
        <h1 className="font-semibold text-lg sm:text-xl text-gray-800">
          {job?.company?.name}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">Nepal</p>
      </div>
      <div>
        <h1 className="font-bold text-md sm:text-lg my-2 text-gray-800">
          {job?.title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
        <Badge className="text-green-600 font-medium bg-green-100 px-2 sm:px-3 py-1 rounded-full">
          {job?.position} Positions
        </Badge>
        <Badge className="text-red-600 font-medium bg-red-100 px-2 sm:px-3 py-1 rounded-full">
          {job?.jobType}
        </Badge>
        <Badge className="text-blue-600 font-medium bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
