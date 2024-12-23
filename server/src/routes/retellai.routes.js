import express from "express";
const router = express.Router();
import { verifyToken } from "../middlewares/auth.middleware.js";

import { RetellAiController } from "../controllers/retellai.controller.js";

router.post("/connect-retellai", verifyToken, RetellAiController);

export default router;
