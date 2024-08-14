import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserProfileController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

//Update User
router.put("/:id", updateUserController);

//delete user
router.delete("/:id", deleteUserController);

//get user
router.get("/:id", getUserController);

//get user profile
router.get("/", getUserProfileController);

//follow a user
router.put("/follow/:id", followUserController);

//unfollow a user
router.put("/unfollow/:id", unfollowUserController);

// module.exports = router;
export default router;
