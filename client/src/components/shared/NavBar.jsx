import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeClassName = "text-[#40A8F5]"; // Class for active link
  const inactiveClassName = "text-white hover:text-[#40A8F5] transition";

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 py-4">
        {/* Logo */}
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold text-white">
            i<span className="text-blue-400">Jobs</span>
          </h1>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
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
          </ul>

          {/* Authentication Buttons */}
          {!user ? (
            <div className="flex items-center gap-2">
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
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 my-4">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-white">Suyan Man Amatya</h4>
                    <p className="text-sm text-gray-300">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-gray-300 items-start my-3">
                  <div className="flex items-center">
                    <User2 className="text-white" />
                    <Button variant="link" className="text-[#40A8F5]">
                      <NavLink to={"/profile"}>View Profile</NavLink>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <LogOut className="text-white" />
                    <Button variant="link" className="text-[#40A8F5]">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center shadow-md gap-4 py-4">
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
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="User Avatar"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white">
                        Suyan Man Amatya
                      </h4>
                      <p className="text-sm text-gray-300">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-300 items-start my-3">
                    <div className="flex items-center">
                      <User2 className="text-white" />
                      <Button variant="link" className="text-[#40A8F5]">
                        <NavLink to={"/profile"}>View Profile</NavLink>
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <LogOut className="text-white" />
                      <Button variant="link" className="text-[#40A8F5]">
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
