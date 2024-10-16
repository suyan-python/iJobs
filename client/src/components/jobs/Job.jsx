import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "laksjdhflashdfjsadkfh";

  return (
    <div className="p-5 rounded-lg shadow-lg bg-white border border-gray-200 flex flex-row sm:flex-col overflow-x-auto max-w-full">
      <div className="flex-shrink-0 min-w-full sm:min-w-0 sm:w-auto">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-gray-500">2 days ago</p>
          <Button
            variant="outline"
            className="rounded-full hover:bg-gray-100"
            size="icon"
          >
            <Bookmark />
          </Button>
        </div>

        <div className="flex items-center gap-4 my-3">
          <Button className="p-6" variant="outline" size="icon">
            <Avatar>
              <AvatarImage src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/10/05203736/letter-k-company-by-eightylogos-brandcrowd.png" />
            </Avatar>
          </Button>
          <div>
            <h1 className="font-semibold text-lg text-gray-800">
              Company Name
            </h1>
            <p className="text-sm text-gray-500">Nepal</p>
          </div>
        </div>

        <div className="mt-2">
          <h1 className="font-bold text-xl text-gray-900 my-2">Title</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            eum magni quibusdam eaque provident similique.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 flex-wrap">
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

        <div className="flex items-center gap-4 mt-5">
          <Button
            onClick={() => navigate(`/description/${jobId}`)}
            variant="outline"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Details
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Save For Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
