import mongoose from "mongoose";
import { JOB_STATUS } from "../utils/constants.js";

const JobSchema = new mongoose.Schema(
  {
    vardas: String,
    telefonas: Number,
    adresas: String,
    email: String,
    lat: String,
    lng: String,
    createdUser: String,
    prislopintas: {
      type: Boolean,
      default: false,
    },
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.Expo,
    },
    info: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    image: String,
    imageId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
