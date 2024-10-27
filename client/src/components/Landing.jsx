import React from "react";
import "./animation.css";
import Hero1Section from "./Hero1Section";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const LandingPage = () => {
  useGetAllJobs();
  return (
    <>
      <Hero1Section />
    </>
  );
};

export default LandingPage;
