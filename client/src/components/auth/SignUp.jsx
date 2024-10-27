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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(setLoading(true));
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
      console.log("Error from Signup Axios");
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div className="hidden w-full max-w-md lg:w-1/2 mx-auto lg:block p-4">
        <img
          src={signup}
          alt="Sign Up Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-1/2 mx-auto bg-white bg-opacity-10 shadow-xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 backdrop-filter backdrop-blur-lg transition duration-300 ease-in-out transform">
        <h1 className="font-bold text-2xl md:text-3xl text-center mb-6 text-white">
          Create Your Account
        </h1>

        <form onSubmit={submitHandler} className="space-y-4 sm:space-y-6">
          {/* Full Name Field */}
          <div>
            <Label className="block text-gray-300 text-sm md:text-base">
              Full Name
            </Label>
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
            <Label className="block text-gray-300 text-sm md:text-base">
              Email
            </Label>
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
            <Label className="block text-gray-300 text-sm md:text-base">
              Phone Number
            </Label>
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
            <Label className="block text-gray-300 text-sm md:text-base">
              Password
            </Label>
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
            <Label className="block text-gray-300 text-sm md:text-base">
              Role
            </Label>
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
                <Label className="ml-2 text-gray-300 text-sm">Student</Label>
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
                <Label className="ml-2 text-gray-300 text-sm">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-4">
            <Label className="block text-gray-300 mb-2 text-sm md:text-base">
              Profile Picture
            </Label>
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
                <span className="text-gray-300 text-sm">Upload a picture</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <Button className="w-full my-4 flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
            >
              SignUp
            </Button>
          )}
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-4 text-sm md:text-base">
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
