import express from "express";
const router = express.Router();

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import stripeRoutes from "./stripe.routes.js";
import retellai from "./retellai.routes.js";

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/premier", stripeRoutes);
router.use("/retellai", retellai);

export default router;
