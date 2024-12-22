import express from "express";
const router = express.Router();

import { RetellAiController } from "../controllers/retellai.controller.js";

router.post("/connect-retellai", RetellAiController);

export default router;
