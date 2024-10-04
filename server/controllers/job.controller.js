import { Job } from "../models/job.model.js";

// admin to post a job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !(
        title ||
        description ||
        requirements ||
        salary ||
        location ||
        jobType ||
        experience ||
        position ||
        companyId
      )
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      experienceLevel: experience,
      location,
      jobType,
      position,
      company: companyId,
      created_by: userId,
    });
    return res
      .status(201)
      .json({ message: "Job posted successfully", job, success: true });
  } catch (error) {
    console.error(error);
  }
};

//now getting all job
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({
        createdAt: -1,
      });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.error(error);
  }
};

//for students to apply for job
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.error(error);
  }
};

//no of job posted by admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.error(error);
  }
};
