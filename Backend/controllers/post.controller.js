import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  getTimeLinePosts,
  likeAndDislike,
  updatePost,
} from "../services/post.service.js";

export const createPostController = async (req, res) => {
  try {
    const newPost = await createPost(req.body);
    res.status(200).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to create a post",
    });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const updatedPost = await updatePost(req.params, req.body);
    res.status(200).json({
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to update a post",
    });
  }
};

export const deletePostController = async (req, res) => {
  try {
    const deletedPost = await deletePost(req.params, req.body);
    res.status(200).json({
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to delete a post",
    });
  }
};

export const likeAndDislikeController = async (req, res) => {
  try {
    const post = await likeAndDislike(req.params, req.body);
    res.status(200).json({
      message: "Post like and dislike action completed",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "post like and dislike action failed",
    });
  }
};

export const getPostController = async (req, res) => {
  try {
    const post = await getPost(req.params);
    res.status(200).json({
      message: "Post has been fetched succesfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to fetch the post",
    });
  }
};

export const getTimeLinePostsController = async (req, res) => {
  try {
    const posts = await getTimeLinePosts(req.params);
    res.status(200).json({
      posts,
      message: "Timeline post fetched succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to fetch the post",
    });
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json({
      message: "Posts have been fetched succesfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: "Failed to fetch the posts",
    });
  }
};
