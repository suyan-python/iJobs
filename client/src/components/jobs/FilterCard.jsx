import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Kathmandu",
      "Lalitpur",
      "Biratnagar",
      "Dharan",
      "Pokhara",
      "Illam",
    ],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1Lakh", "1Lakh -5Lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="font-normal w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-5 rounded-md shadow-md">
      <h1 className="font-bold text-2xl text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 mb-6 border-gray-300" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index} className="mb-5">
            <h1 className="font-semibold text-lg text-gray-700 mb-3">
              {data.filterType}
            </h1>
            {data.array.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 my-2 hover:bg-gray-100 rounded-md p-2"
              >
                <RadioGroupItem value={item} />
                <Label className="cursor-pointer text-gray-700">{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
