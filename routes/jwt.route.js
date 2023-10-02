import { Router } from "express";
import { getJWT } from "../controllers/jwt.controller";

const router = Router();

router.get("/", getJWT);

export default router;
