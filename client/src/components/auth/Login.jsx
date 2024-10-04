import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-10 shadow-xl rounded-lg p-8 backdrop-filter backdrop-blur-lg">
        <h1 className="font-bold text-2xl text-center mb-6 text-white">
          Login to Your Account
        </h1>
        <form className="space-y-6">
          <div>
            <Label className="block text-gray-300">Email</Label>
            <Input
              type="email"
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label className="block text-gray-300">Password</Label>
            <Input
              type="password"
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="my-4">
            <Label className="block text-gray-300">Role</Label>
            <RadioGroup className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label className="ml-2 text-gray-300">Student</Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label className="ml-2 text-gray-300">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Login
          </Button>
        </form>
        <p className="text-center text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
