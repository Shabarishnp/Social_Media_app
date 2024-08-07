import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export const updateUser = async (userId, updateData) => {
  if (updateData.password) {
    try {
      updateData.password = await bcrypt.hashSync(updateData.password, 10);
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

export const followUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("You cannot follow yourself");
  } else {
    try {
      const user = await userModel.findById(userdata.userId);
      const currentUser = await userModel.findById(updateData.id);
      if (!user.followers.includes(userdata.userId)) {
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
      if (!user.followers.includes(userdata.userId)) {
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
