import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import Logo from "../../assets/logo/ijobswhite.png";

const NavBar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeClassName =
    "text-[#40A8F5] animated-gradient-text font-semibold text-lg";
  const inactiveClassName =
    "text-white text-lg hover:text-[#40A8F5] transition-colors duration-200";

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-1">
        {/* Logo */}
        <NavLink to={"/"}>
          <div className="w-1/12 p-1">
            <img src={Logo} alt="Logo" className="object-contain" />
          </div>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <NavLink
                    to="/admin/companies"
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                  >
                    Companies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/jobs"
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                  >
                    Jobs
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/browse"
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                  >
                    Browse
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Authentication Buttons */}
          {!user ? (
            <div className="flex items-center gap-4">
              <NavLink to="/login">
                <Button
                  variant="outline"
                  className="text-white border-[#40A8F5] hover:border-[#2B81C7]"
                >
                  Login
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button className="text-white bg-[#40A8F5] hover:bg-[#2B81C7] transition duration-150">
                  SignUp
                </Button>
              </NavLink>
            </div>
          ) : (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-purple-800 rounded-lg p-4">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white text-xl">
                        {user?.fullName}
                      </h4>
                      <p className="text-base text-gray-300">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-300 items-start my-3">
                    {user && user.role === "student" && (
                      <div className="flex items-center">
                        <User2 className="text-white" />
                        <Button
                          variant="link"
                          className="text-[#40A8F5] text-lg"
                        >
                          <NavLink to={"/profile"}>View Profile</NavLink>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center">
                      <LogOut className="text-white" />
                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="text-[#40A8F5] text-lg"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-purple-900">
          <ul className="flex flex-col items-center shadow-lg gap-4 py-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Browse
              </NavLink>
            </li>
            {!user ? (
              <div className="flex flex-col gap-2 items-center">
                <Button
                  variant="outline"
                  className="w-full text-white border-[#40A8F5] hover:border-[#2B81C7]"
                >
                  <NavLink to="/login">Login</NavLink>
                </Button>
                <Button className="w-full text-white bg-[#40A8F5] hover:bg-[#2B81C7] transition duration-150">
                  <NavLink to="/signup">SignUp</NavLink>
                </Button>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-purple-800 rounded-lg p-4">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white text-xl">
                        Suyan Man Amatya
                        {user?.fullName}
                      </h4>
                      <p className="text-base text-gray-300">
                        Lorem ipsum dolor sit amet.
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-300 items-start my-3">
                    <div className="flex items-center">
                      <User2 className="text-white" />
                      <Button variant="link" className="text-[#40A8F5] text-lg">
                        <NavLink to={"/profile"}>View Profile</NavLink>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <LogOut className="text-white" />
                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="text-[#40A8F5] text-lg"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
