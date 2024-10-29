import React from "react";
import NavBar from "../shared/NavBar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const CompanyCreate = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="Apple Inc., Google LLC, Microsoft etc."
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="destructive"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>

          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
