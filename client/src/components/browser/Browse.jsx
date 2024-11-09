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
    <div className="pt-32 bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="max-w-7xl mx-auto mt-5 pb-52">
        <div>
          <h1 className="text-white font-bold text-xl">
            Search Results ({allJobs.length} )
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {allJobs.map((job) => {
              return <Job key={job._id} job={job} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
