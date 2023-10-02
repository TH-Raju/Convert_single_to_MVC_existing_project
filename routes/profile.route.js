import { Router } from "express";
import {
  getAllProfile,
  getProfile,
  getSingleProfile,
} from "../controllers/profile.controller";

const router = Router();

// Search

//All Profile
router.get("/profiles", getAllProfile);
router.get("/searchProfile", getProfile);

router.get("/profiles/:id", getSingleProfile);

export default router;
