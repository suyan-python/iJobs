import React, { useEffect } from "react";
import "./animation.css";
import Hero1Section from "./Hero1Section";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <Hero1Section />
    </>
  );
};

export default LandingPage;
