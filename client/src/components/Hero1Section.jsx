import React from "react";
import { Link } from "react-router-dom";
import "./animation.css";
import feeling from "../assets/pictures/feeling.svg";
import Hero2Section from "./Hero2Section";
import Hero3Section from "./Hero3Section";
import Hero4Section from "./Hero4Section";
import CategoryCaroursel from "./CategoryCaroursel";
import LatestJobs from "./LatestJobs";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden py-14">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-animate z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 mt-10 sm:mt-16 md:mt-32">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-14 py-10">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <img
              src={feeling}
              alt="Feeling excited about job search"
              className="w-full"
            />
          </div>
          <div className="text-center lg:text-left mb-12 pt-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
              Discover Your <span className="text-blue-400">Dream Jobs</span>
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

        {/* professional section  */}
        <Hero4Section />
        <CategoryCaroursel />
        <LatestJobs />

        {/* Features Section */}
        <Hero2Section />

        {/* Call to Action Section */}
        <Hero3Section />
      </div>
    </div>
  );
};

export default HeroSection;
