import express from "express";
import { User } from "../models/user.model.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

// Middleware to verify Firebase Token

// Protected Route Example
router.post("/login", verifyToken, async (req, res) => {
  console.log("Protected API accessed by:", req.user.uid);
  const { uid, name, email, picture } = req.user;
  let user = await User.findOne({ uid });
  if (!user) {
    user = new User({ uid, name, email, picture });
    await user.save(); // Save user if not found in DB
  }

  res.send(user); // Return user information
});

export default router;
