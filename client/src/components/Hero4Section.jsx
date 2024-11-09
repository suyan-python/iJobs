import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Hero4Section = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="flex flex-col items-center px-4 py-10 text-center lg:py-20 ">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl mb-4">
          Search, Apply &<br className="hidden md:block" />
          Get Your{" "}
          <span className="text-transparent bg-clip-text animated-gradient-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-600">
            Dream Job
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white mb-8">
          Discover opportunities that match your skills and goals. Explore job
          listings, connect with top recruiters, and take the next step in your
          career journey with confidence.
        </p>
        <div className="flex items-center w-full max-w-lg px-4 py-2 bg-white shadow-lg rounded-full mx-auto border border-gray-200 focus-within:border-blue-400">
          <input
            type="text"
            placeholder="Find Your Dream Job"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none rounded-full"
          />
          <Button
            onClick={searchJobHandler}
            className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero4Section;
