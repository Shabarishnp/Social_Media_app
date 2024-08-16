// import userModel from "../models/user.model.js";
// import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

//register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...userData } = newUser._doc;
    res.status(200).json({
      userData,
      message: "User Registration Successful",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred while Registering",
    });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body, res);
    const { password, ...userData } = user._doc;

    res.status(200).json({
      message: "User Login Successful",
      userData,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred while deleting the user",
    });
    console.log(error);
  }
};
