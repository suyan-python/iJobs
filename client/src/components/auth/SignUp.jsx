import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/pictures/signup.svg";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error from Axios");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div className="hidden w-full max-w-md lg:w-1/2 mx-auto lg:block  p-4">
        <img
          src={signup}
          alt="Sign Up Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-1/2 mx-auto bg-white bg-opacity-10 shadow-xl rounded-lg p-8 backdrop-filter backdrop-blur-lg transition duration-300 ease-in-out transform hover:scale-105">
        <h1 className="font-bold text-2xl lg:text-3xl text-center mb-6 text-white">
          Create Your Account
        </h1>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <Label className="block text-gray-300">Full Name</Label>
            <Input
              type="text"
              value={input.fullName}
              name="fullName"
              onChange={changeEventHandler}
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <Label className="block text-gray-300">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <Label className="block text-gray-300">Phone Number</Label>
            <Input
              type="number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}
          <div>
            <Label className="block text-gray-300">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Role Field */}
          <div className="my-4">
            <Label className="block text-gray-300">Role</Label>
            <RadioGroup className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="ml-2 text-gray-300">Student</Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="ml-2 text-gray-300">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-4">
            <Label className="block text-gray-300 mb-2">Profile Picture</Label>
            <div className="flex items-center">
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                id="profilePicture"
                className="hidden"
              />
              <label
                htmlFor="profilePicture"
                className="flex items-center justify-center w-full p-3 border border-transparent bg-white bg-opacity-20 rounded-md cursor-pointer transition-all duration-200 hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="text-gray-300">Upload a picture</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
