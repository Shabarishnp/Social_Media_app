import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";

export const createPost = async (body) => {
  try {
    const newPost = new postModel(body);

    await newPost.save();

    return newPost;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (params, body) => {
  try {
    const updatedPost = await postModel.findById(params.id);
    if (updatedPost.userId === body.userId) {
      await postModel.updateOne({
        $set: body,
      });
      return updatedPost;
    } else {
      throw new Error("You cannot update this post");
    }
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (params, body) => {
  try {
    const deletedPost = await postModel.findById(params.id);
    if (deletedPost.userId === body.userId) {
      await postModel.deleteOne();
      return deletedPost;
    } else {
      throw new Error("You cannot delete this post");
    }
  } catch (error) {
    throw error;
  }
};

export const likeAndDislike = async (params, body) => {
  try {
    const post = await postModel.findById(params.id);
    if (!post.likes.includes(body.userId)) {
      await post.updateOne({
        $push: { likes: body.userId },
      });
    } else {
      await post.updateOne({
        $pull: { likes: body.userId },
      });
    }
    return post;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (params) => {
  try {
    const post = await postModel.findById(params.id);
    return post;
  } catch (error) {
    throw error;
  }
};

export const getTimeLinePosts = async (body) => {
  try {
    const currentUser = await userModel.findById(body.userId);
    const userPosts = await postModel.find({ userId: currentUser._id });
    const timelinePosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return postModel.find({ userId: friendId });
      })
    );
    return userPosts.concat({ ...timelinePosts });
  } catch (error) {
    throw error;
  }
};
