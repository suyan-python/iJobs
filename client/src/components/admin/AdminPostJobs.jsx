import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const companyArray = [];

const AdminPostJobs = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-center justify-center w-full py-10">
          <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Post a New Job
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-700">Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  placeholder="Enter job title"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter job description"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Requirements</Label>
                <Input
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                  placeholder="Enter job requirements"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Salary</Label>
                <Input
                  type="text"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  placeholder="Enter salary range"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Location</Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  placeholder="Enter job location"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Job Type</Label>
                <Input
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                  placeholder="e.g., Full-time, Part-time"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">Experience Level</Label>
                <Input
                  type="text"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  placeholder="e.g., 3+ years"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              <div>
                <Label className="text-gray-700">No of Position</Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  placeholder="Enter number of positions"
                  className="focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 border-gray-300 rounded my-1"
                />
              </div>
              {companies.length > 0 && (
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => {
                        return (
                          <SelectItem value={company?.name?.toLowerCase()}>
                            {company?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </div>
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105 my-4"
              >
                Post Job
              </Button>
            )}
            {companies.length === 0 && (
              <p className="text-xs text-red-600 font-bold text-center my-3">
                *Register a company first, before posting a job
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPostJobs;
