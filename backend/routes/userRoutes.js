import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

// take route function if you need multiple methods (GET, POST) for one endpoint
router.route("/profile").get(protect, getUserProfile);

export default router;