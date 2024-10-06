import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />{" "}
        </Button>
      </div>
      <div className="flex items-center  gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/10/05203736/letter-k-company-by-eightylogos-brandcrowd.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum
          magni quibusdam eaque provident similique.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
          12 Positions
        </Badge>
        <Badge className="text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full">
          Part Time
        </Badge>
        <Badge className="text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
          24 L
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-blue-800 text-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
