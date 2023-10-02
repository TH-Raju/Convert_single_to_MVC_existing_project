import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
const router = Router();
import { postAbout, getAbouts } from "../controllers/about.controller";

// Add a About Us
router.post("/addAboutus", verifyJWT, postAbout);
router.get("/aboutus", getAbouts);

export default router;
