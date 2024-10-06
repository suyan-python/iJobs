import React from "react";
import LatestJobsCards from "./LatestJobsCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold ">
        {" "}
        <span className="text-blue-400">Latest & Top </span> Jobs Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobsCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
