import React from "react";
import { Link } from "react-router-dom";

const Hero3Section = () => {
  return (
    <div className=" text-center p-8 md:p-10 rounded-md w-full  mx-auto">
      <h3 className="lg:text-6xl text-4xl font-bold mb-4">Join Us Today!</h3>
      <p className="lg:text-lg text-2xl mb-6 max-w-lg mx-auto">
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
