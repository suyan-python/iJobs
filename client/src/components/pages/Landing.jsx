import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserFriends, FaRegLightbulb } from "react-icons/fa"; // Icons for features section
import NavBar from "../shared/NavBar"; // Make sure the path is correct
import "./animation.css";
import feeling from "../../assets/pictures/feeling.svg";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden py-14">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-animate z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 mt-10 sm:mt-16 md:mt-32">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-full">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <img
              src={feeling}
              alt="Feeling excited about job search"
              className="w-full"
            />
          </div>
          <div className="text-center lg:text-left mb-12 pt-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
              Discover Your Dream Job
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Find the perfect job that fits your skills and interests. Join our
              platform today!
            </p>
            <Link to="/signup">
              <button className="bg-blue-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
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
              Search and filter jobs based on your qualifications and
              preferences.
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
              Connect directly with recruiters and boost your chances of landing
              an interview.
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

        {/* Call to Action Section */}
        <div className="mt-12 text-center shadow-md p-8 md:p-10 backdrop-blur-sm rounded-md w-full max-w-lg mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Join Us Today!
          </h3>
          <p className="text-sm sm:text-lg mb-6 max-w-lg mx-auto">
            Create an account and start your journey towards your dream job.
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 text-white py-3 px-6 md:py-4 md:px-8 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg transform hover:scale-105">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
