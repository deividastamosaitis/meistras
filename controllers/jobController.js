import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

export const getAllJobs = async (req, res) => {
  // const jobs = await Job.find({ createdBy: req.user.userId });
  const jobs = await Job.find(req.body);
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const newJob = { ...req.body };
  console.log(req.file);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    req.body.image = response.secure_url;
    req.body.imageId = response.imageId;
  }
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (req.file && updatedJob.imageId) {
    await cloudinary.v2.uploader.destroy(updatedJob.imageId);
  }

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};
