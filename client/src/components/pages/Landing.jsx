import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserFriends, FaRegLightbulb } from "react-icons/fa"; // Icons for features section
import NavBar from "../shared/NavBar"; // Make sure the path is correct
import "./animation.css";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
      {/* Fixed Navbar */}
      {/* <NavBar /> */}

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-animate z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center px-4 mt-32">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-20">
          {" "}
          {/* Add padding for navbar */}
          <h1 className="text-6xl font-extrabold mb-4">
            Discover Your Dream Job
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Find the perfect job that fits your skills and interests. Join our
            platform today!
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl w-full mx-auto px-4">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-1/3 mx-2">
            <div className="flex items-center mb-4">
              <FaSearch className="text-blue-400 text-4xl mr-3" />
              <h2 className="text-2xl font-semibold">Job Search Made Easy</h2>
            </div>
            <p className="text-gray-300">
              Search and filter jobs based on your qualifications and
              preferences.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-1/3 mx-2">
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-blue-400 text-4xl mr-3" />
              <h2 className="text-2xl font-semibold">
                Connect with Recruiters
              </h2>
            </div>
            <p className="text-gray-300">
              Connect directly with recruiters and boost your chances of landing
              an interview.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-1/3 mx-2">
            <div className="flex items-center mb-4">
              <FaRegLightbulb className="text-blue-400 text-4xl mr-3" />
              <h2 className="text-2xl font-semibold">
                Personalized Recommendations
              </h2>
            </div>
            <p className="text-gray-300">
              Get job recommendations tailored to your profile and skills.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Join Us Today!</h3>
          <p className="text-lg mb-6 max-w-lg mx-auto">
            Create an account and start your journey towards your dream job.
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg transform hover:scale-105">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
