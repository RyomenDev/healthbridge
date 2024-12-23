import express from "express";
const router = express.Router();

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import stripeRoutes from "./stripe.routes.js";
import retellai from "./retellai.routes.js";
import patientRecords from "./patient.routes.js";

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/premier", stripeRoutes);
router.use("/retellai", retellai);
router.use("/records", patientRecords);

export default router;
