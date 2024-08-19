import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const registerUser = async (body) => {
  const hashedPassword = bcryptjs.hashSync(body.password, 10);
  const newUser = new userModel({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};

export const loginUser = async (body) => {
  const user = await userModel.findOne({ email: body.email });
  !user && res.status(404).json("User not Found");

  const passwordCheck = await bcryptjs.compare(body.password, user.password);
  !passwordCheck && res.status(400).json("Invalid Password");

  return user;
};
