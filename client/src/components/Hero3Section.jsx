import React from "react";
import { Link } from "react-router-dom";

const Hero3Section = () => {
  return (
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
  );
};

export default Hero3Section;
