import { Router } from "express";
const router = Router();
import { postPayment } from "../controllers/payment.controller";

// Payment Api
router.post("/create-payment-intent", postPayment);

export default router;
