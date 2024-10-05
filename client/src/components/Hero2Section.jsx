import React from "react";
import { FaRegLightbulb, FaSearch, FaUserFriends } from "react-icons/fa";

const Hero2Section = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl w-full mx-auto px-4 my-16 sm:my-24 py-7">
      {/* Feature 1 */}
      <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaSearch className="text-blue-400 text-3xl md:text-4xl mr-3" />
          <h2 className="text-xl md:text-2xl font-semibold">
            Job Search Made Easy
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-300">
          Search and filter jobs based on your qualifications and preferences.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaUserFriends className="text-blue-400 text-3xl md:text-4xl mr-3" />
          <h2 className="text-xl md:text-2xl font-semibold">
            Connect with Recruiters
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-300">
          Connect directly with recruiters and boost your chances of landing an
          interview.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg shadow-lg mb-8 md:mb-0 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaRegLightbulb className="text-blue-400 text-3xl md:text-4xl mr-3" />
          <h2 className="text-xl md:text-2xl font-semibold">
            Personalized Recommendations
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-300">
          Get job recommendations tailored to your profile and skills.
        </p>
      </div>
    </div>
  );
};

export default Hero2Section;
