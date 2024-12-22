import express from "express";
const router = express.Router();
import { verifyToken } from "../middlewares/auth.middleware.js";

import {
  UserViewProfileCOntroller,
  UserUpdateProfileCOntroller,
} from "../controllers/user.controller.js";

router.get("/profile", verifyToken, UserViewProfileCOntroller);
router.put("/update-profile", verifyToken, UserUpdateProfileCOntroller);

export default router;
