import { Router } from "express";
const router = Router();

import {
  getAllSutartys,
  createSutartis,
  getSutartis,
  updateSutartys,
} from "../controllers/sutartysController.js";

router.route("/").get(getAllSutartys).post(createSutartis);
router.get("/:id", getSutartis);
router.patch("/:id", updateSutartys);

export default router;
