import express from "express";
const router = express.Router();
import { verifyToken } from "../middlewares/auth.middleware.js";
import { userPayment } from "../controllers/payment.controller.js";

// Create a payment intent for the platform fee
router.post("/create-payment-intent", verifyToken,userPayment);

export default router;
