import bcryptjs from "bcryptjs";
import userModel from "../models/user.model.js";
// import { query } from "mongoose";

export const updateUser = async (userId, updateData) => {
  if (updateData.password) {
    try {
      updateData.password = await bcryptjs.hashSync(updateData.password, 10);
    } catch (error) {
      throw error;
    }
  }
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: updateData,
      },
      {
        new: true,
      }
    );
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateProfilePicture = async (userId, newProfilePicture) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: { profilePicture: newProfilePicture },
      },
      {
        new: true,
      }
    );
    return user;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userId) => {
  try {
    await userModel.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (query) => {
  try {
    const user = await userModel.findOne({ username: query.username });
    return user;
  } catch (error) {
    throw error;
  }
};

export const followUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("You cannot follow yourself");
  } else {
    try {
      const user = await userModel.findById(userdata.userId);
      const currentUser = await userModel.findById(updateData.id);
      if (!user.followings.includes(userdata.id)) {
        await currentUser.updateOne({ $push: { followers: userdata.userId } });
        await user.updateOne({
          $push: { followings: updateData.id },
        });
        return { user, currentUser };
      } else {
        throw new Error("You are already following this user");
      }
    } catch (error) {
      throw error;
    }
  }
};

export const unfollowUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("You cannot unfollow yourself");
  } else {
    try {
      const user = await userModel.findById(userdata.userId);
      const currentUser = await userModel.findById(updateData.id);
      if (!user.followings.includes(userdata.id)) {
        await currentUser.updateOne(
          { $pull: { followers: userdata.userId } },
          { new: true }
        );
        await user.updateOne(
          {
            $pull: { followings: updateData.id },
          },
          { new: true }
        );
        return { user, currentUser };
      } else {
        throw new Error("You are not following this user");
      }
    } catch (error) {
      throw error;
    }
  }
};

export const getUserFriends = async (params) => {
  try {
    const user = await userModel.findById(params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return userModel.findById(friendId);
      })
    );
    const friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    return friendList;
  } catch (err) {
    throw err;
  }
};
