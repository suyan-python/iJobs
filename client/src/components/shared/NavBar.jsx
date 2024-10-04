import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const NavBar = () => {
  const user = false;
  return (
    <div className="bg-white flex items-center justify-between mx-auto max-w-7xl h-16">
      <div>
        <h1 className="text-2xl font-bold">
          i<span className="text-[#F83002]">Jobs</span>{" "}
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex font-medium items-center gap-5">
          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link>Jobs</Link>{" "}
          </li>
          <li>
            {" "}
            <Link>Browse</Link>{" "}
          </li>
        </ul>
        {!user ? (
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button className="text-white bg-[#6A38C2] hover:bg-[#381674] transition duration-100">
              <Link to={"/signup"}>SignUp</Link>
            </Button>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4 items-center">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">Suyan Man Amatya</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-gray-500 items-start my-3">
                <div className="flex items-center">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex items-center">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default NavBar;
