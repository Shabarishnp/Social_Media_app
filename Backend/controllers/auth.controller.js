// import userModel from "../models/user.model.js";
// import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

//register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      data,
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
    const data = await deleteUser(req.params.id);

    res.status(200).json({
      message: "User Login Successful",
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred while deleting the user",
    });
    console.log(error);
  }
};
