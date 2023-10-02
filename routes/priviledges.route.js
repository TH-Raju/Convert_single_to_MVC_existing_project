import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import {
  patchPriviledge,
  getPriviledge,
  getSinglePriviledge,
} from "../controllers/priviledges.controller";

const router = Router();

//Addmin add Priviledges
router.patch("/addPriviledges", verifyJWT, patchPriviledge);

// All Priviledges
router.get("/priviledges", getPriviledge);

//get single
router.get("/priviledges/:id", getSinglePriviledge);

export default router;
