import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import {
  postPackage,
  getPackage,
  getSinglePackage,
  getPackageByEmail,
  deletePackage,
  getPackageById,
  updatePackage,
} from "../controllers/packages.controller";

const router = Router();

// Modify name package to packages --Raju

router.post("/addPackage", verifyJWT, postPackage);

router.get("/packages", getPackage);

router.get("/pkg/:pkg", getSinglePackage);

//Admin Package get
router.get("/packages/:email", getPackageByEmail);

// Package delete
router.delete("/packages/:id", verifyJWT, deletePackage);

router.get("/pac/:id", getPackageById);

//update Package
router.put("/packageUpdate/:id", updatePackage);

export default router;
