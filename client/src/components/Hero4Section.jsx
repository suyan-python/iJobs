import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero4Section = () => {
  return (
    <div className="text-center ">
      <div className="text-center">
        {/* <span className="px-4 py-2 rounded-full bg-gray-100 text-blue-400 font-medium">
        No.1 Job Hunt Website
      </span> */}
        <h1 className="text-5xl font-bold ">
          Search, Apply & <br />
          Get Your <span className="text-blue-400">Dream Jobs</span>
        </h1>
        <p className="w-auto text-center my-5">
          Discover opportunities to your skills and goals. Explore job listings,
          connect with top recruiters, and take the next step in your career
          journey with confidence.
        </p>
        <div className="flex w-[40%]  border-gray-200 pl-3 items-center gap-4 mx-auto text-black">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            className="outline-none border-none w-full rounded-full px-5 py-2"
          />
          <Button className="rounded-full">
            <Search className="text-white h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero4Section;
