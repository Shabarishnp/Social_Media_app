import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserFriendsController,
  getUserProfileController,
  unfollowUserController,
  updateProfilePictureController,
  updateUserController,
} from "../controllers/user.controller.js";
import { parser } from "../config/cloudinary.js";

const router = express.Router();

//Update User
router.put("/:id", updateUserController);

//update profile Picture
router.put(
  "/:id/profile-picture",
  parser.single("profilePicture"),
  updateProfilePictureController
);

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

//getFriends
router.get("/friends/:userId", getUserFriendsController);

// module.exports = router;
export default router;
