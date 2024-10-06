import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = () => {
  return (
    <div className="shadow-lg cursor-pointer py-6 px-6 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="mb-4">
        <h1 className="font-semibold text-xl text-gray-800">Company Name</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 text-gray-800">Job Title</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Join our team and be part of an exciting journey to create something
          great together.
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-3 mt-4">
        <Badge className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
          12 Positions
        </Badge>
        <Badge className="text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full">
          Part Time
        </Badge>
        <Badge className="text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
          24 L
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
