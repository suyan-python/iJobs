import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;

  return (
    <div className="max-w-7xl mx-auto my-32 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="font-bold text-2xl ">Frontend Developer</h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Badge className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
              12 Positions
            </Badge>
            <Badge className="text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full">
              Part Time
            </Badge>
            <Badge className="text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
              24 LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg text-white transition ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-green-400 hover:to-green-600"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-500 font-medium  py-4 mt-6">
        Job Description
      </h1>
      <div className="my-6 text-gray-500">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-400">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-400">Lalitpur</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-400">2 years</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-400">12 LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-400">4</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-400">10/13/2024</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
