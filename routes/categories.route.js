import { Router } from "express";
const router = Router();
import {
  getAllCategoriy,
  getSingleCategoriy,
  getCategoriyByName,
} from "../controllers/categories.controller";

//All category
router.get("/", getAllCategoriy);

// modify /categorie/:id --- to ---- /categories/:id
router.get("/:id", getSingleCategoriy);

router.get("/:name", getCategoriyByName);

export default router;
