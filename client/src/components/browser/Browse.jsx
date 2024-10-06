import React from "react";
import Job from "../jobs/Job";

const randomJobs = [1, 2, 3];

const Browser = () => {
  return (
    <div className="pt-32 bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="max-w-7xl mx-auto mt-5 pb-52">
        <div>
          <h1 className="text-white font-bold text-xl">
            Search Results ({randomJobs.length} )
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {randomJobs.map((item, index) => {
              return <Job />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
