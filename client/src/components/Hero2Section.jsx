import React from "react";
import { FaRegLightbulb, FaSearch, FaUserFriends } from "react-icons/fa";

const Hero2Section = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl w-full px-4 lg:my-14 sm:my-20 py-7 space-y-6 md:space-y-0">
      {/* Feature 1 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaSearch className="text-white text-4xl mr-3 animate-bounce" />
          <h2 className="text-2xl font-semibold text-white">
            Job Search Made Easy
          </h2>
        </div>
        <p className="text-base text-gray-100">
          Search and filter jobs based on your qualifications and preferences.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaUserFriends className="text-white text-4xl mr-3 animate-bounce" />
          <h2 className="text-2xl font-semibold text-white">
            Connect with Recruiters
          </h2>
        </div>
        <p className="text-base text-gray-100">
          Connect directly with recruiters and boost your chances of landing an
          interview.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 w-full md:w-1/3 mx-2 h-auto">
        <div className="flex items-center mb-4">
          <FaRegLightbulb className="text-white text-4xl mr-3 animate-bounce" />
          <h2 className="text-2xl font-semibold text-white">
            Personalized Recommendations
          </h2>
        </div>
        <p className="text-base text-gray-100">
          Get job recommendations tailored to your profile and skills.
        </p>
      </div>
    </div>
  );
};

export default Hero2Section;
