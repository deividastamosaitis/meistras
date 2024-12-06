import { Router } from "express";
const router = Router();

import {
  getAllSutartys,
  createSutartis,
  getSutartis,
  updateSutartys,
} from "../controllers/sutartysController.js";

router.post("/", createSutartis);
router.get("/", getAllSutartys);
router.get("/:id", getSutartis);
router.patch("/:id", updateSutartys);

export default router;
