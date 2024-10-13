import React from "react";
import { Badge } from "./ui/badge";

const JobDescription = () => {
  return (
    <div className="max-w-7xl mx-auto my-32">
      <h1 className="font-bold text-xl ">Title</h1>
      <div className="flex items-center gap-2 mt-4">
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

export default JobDescription;
