import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import {
  getBookings,
  postBookings,
  getSingleBook,
  postPayment,
} from "../controllers/bookings.controller";
const router = Router();

//get bookings my product
router.get("/bookings", verifyJWT, getBookings);

// bookings post (submit data)
router.post("/bookings", postBookings);

// Payment booking api
router.get("/bookings/:id", getSingleBook);

router.post("/payments", postPayment);

export default router;
