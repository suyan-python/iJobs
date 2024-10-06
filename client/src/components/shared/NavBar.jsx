import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md shadow-md w-full fixed top-0 left-0 z-50">
      {" "}
      {/* Added backdrop-blur-md for blur effect */}
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 py-4">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <h1 className="text-2xl font-bold text-white">
              i<span className="text-blue-400">Jobs</span>
            </h1>
          </div>
        </Link>
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
              <Link
                to="/"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/browse"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Browse
              </Link>
            </li>
          </ul>

          {/* Authentication Buttons */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-white border-[#40A8F5] hover:border-[#2B81C7]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="text-white bg-[#40A8F5] hover:bg-[#2B81C7] transition duration-150">
                  SignUp
                </Button>
              </Link>
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
                      <Link to={"/profile"}>View Profile</Link>
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
              <Link
                to="/"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/browse"
                className="hover:text-[#40A8F5] text-white transition"
              >
                Browse
              </Link>
            </li>
            {!user ? (
              <div className="flex flex-col gap-2 items-center">
                <Button
                  variant="outline"
                  className="w-full text-white border-[#40A8F5] hover:border-[#2B81C7]"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="w-full text-white bg-[#40A8F5] hover:bg-[#2B81C7] transition duration-150">
                  <Link to="/signup">SignUp</Link>
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
                        <Link to={"/profile"}>View Profile</Link>
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
