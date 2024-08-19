import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  //description
  desc: {
    type: String,
  },
  from: {
    type: String,
    default: "Karnataka",
  },
  city: {
    type: String,
    default: "Bangalore",
  },
  relationship: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("user", userSchema);
