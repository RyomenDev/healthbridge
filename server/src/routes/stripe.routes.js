import express from "express";
const router = express.Router();
import { userPayment } from "../controllers/payment.controller.js";

// Create a payment intent for the platform fee
router.post("/create-payment-intent", userPayment);

export default router;
