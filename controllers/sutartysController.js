import Sutartys from "../models/SutartysModel.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const getAllSutartys = async (req, res) => {
  // const jobs = await Job.find({ createdBy: req.user.userId });
  const sutartys = await Sutartys.find(req.body);
  res.status(StatusCodes.OK).json({ sutartys });
};

export const createSutartis = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const sutartys = await Sutartys.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getSutartis = async (req, res) => {
  const sutartys = await Sutartys.findById(req.params.id);
  res.status(StatusCodes.OK).json({ sutartys });
};

export const updateSutartys = async (req, res) => {
  const newSutartis = { ...req.body };
  console.log(req.file);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    req.body.image = response.secure_url;
    req.body.imageId = response.imageId;
  }
  const updateSutartys = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (req.file && updatedJob.imageId) {
    await cloudinary.v2.uploader.destroy(updateSutartys.imageId);
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: "Sutartis redaguota", job: updateSutartys });
};
