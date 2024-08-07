import express from "express";
import {
  createPostController,
  deletePostController,
  getPostController,
  getTimeLinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.controller.js";
const router = express.Router();

// Create a new post
router.post("/create-post", createPostController);

//update post
router.put("/update-post/:id", updatePostController);

//delete post
router.delete("/delete-post/:id", deletePostController);

//likes and dislikes
router.put("/like-post/:id", likeAndDislikeController);

//get posts
router.get("/get-post/:id", getPostController);

//get timeline posts
router.get("/get-timeline-post", getTimeLinePostsController);

// module.exports = router;

export default router;
