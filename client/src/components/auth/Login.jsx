import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import login from "../../assets/pictures/login.svg";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 p-4">
        <img
          src={login}
          alt="Login Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-1/2 mx-auto bg-white bg-opacity-10 shadow-xl rounded-lg p-8 backdrop-filter backdrop-blur-lg transition duration-300 ease-in-out transform">
        <h1 className="font-bold text-2xl lg:text-3xl text-center mb-6 text-white">
          Login to Your Account
        </h1>

        <form onSubmit={submitHandler} className="space-y-6">
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

          {/* Submit Button */}
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wait{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
            >
              Login
            </Button>
          )}
        </form>

        {/* Sign Up Link */}
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
