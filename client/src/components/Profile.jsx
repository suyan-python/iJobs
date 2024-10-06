import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];

const Profile = () => {
  const isResume = true;
  return (
    <div className="py-20 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/10/05203736/letter-k-company-by-eightylogos-brandcrowd.png" />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl">Full Name</h1>
              <p className="text-gray-600 mt-1">
                Passionate about coding and technology. Experienced in building
                modern web applications.
              </p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Pen /> Edit Profile
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-500" />
            <span className="text-gray-700">hero@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-gray-500" />
            <span className="text-gray-700">9800000</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-xl mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-blue-100 text-blue-800 py-1 px-3 rounded-md"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="my-6">
          <h2 className="font-semibold text-xl mb-2">Resume</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-base font-bold">Download Resume</Label>
            {isResume ? (
              <a
                href="https://youtube.com"
                target="blank"
                className="text-blue-500 hover:underline"
              >
                View File
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="font-semibold text-xl mb-4">Applied Jobs</h2>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
