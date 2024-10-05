import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCards = () => {
  return (
    <div className="shadow-xl cursor-pointer py-4 px-2 rounded-md">
      <div>
        <h1 className="font-medium text-xl">Company Name</h1>
        <p className="text-sm text-gray-300">Nepal</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job title</h1>
        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="gap-5 flex items-center mt-4">
        <Badge className={"text-green-400 font-bold bg-white"} variant="ghost">
          12 Positions
        </Badge>
        <Badge
          className={"text-red-400 font-bold bg-white mx-4"}
          variant="ghost"
        >
          Part Time
        </Badge>
        <Badge className={"text-blue-400 font-bold bg-white"} variant="ghost">
          24 L
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
