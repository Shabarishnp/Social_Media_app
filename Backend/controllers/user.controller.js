import {
  deleteUser,
  followUser,
  getUser,
  unfollowUser,
  updateUser,
} from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.status(200).json({
        message: "User updated successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("You can only update your account");
  }
};
export const deleteUserController = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await deleteUser(req.params.id);
      res.status(200).json({
        message: "Profile has been deleted succesfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(500).json("you can only delete your account");
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "Profile has been fetched succesfully",
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

export const followUserController = async (req, res) => {
  try {
    const data = await followUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "Profile has been fetched succesfully",
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

export const unfollowUserController = async (req, res) => {
  try {
    const data = await unfollowUser(req.body, req.params);
    res.status(200).json({
      data,
      message: "Profile has been fetched succesfully",
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};
