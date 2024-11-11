import React, { useEffect } from "react";
import Job from "../jobs/Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browser = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div className="pt-32 bg-gradient-to-br from-gray-900 via-blue-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-8">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl">
            Search Results
            <span className="text-blue-400"> ({allJobs.length})</span>
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base lg:text-lg">
            Browse through job listings that match your skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.map((job) => (
            <div
              className="transition-transform transform hover:scale-105"
              key={job._id}
            >
              <Job job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
