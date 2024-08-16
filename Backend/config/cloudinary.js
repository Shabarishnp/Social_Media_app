import { v2 } from "cloudinary";
const cloudinary = v2;
// const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
// import dotenv from "dotenv";
// dotenv.config();

cloudinary.config({
  cloud_name: "dqbxqbpyh",
  api_key: 373755537453334,
  api_secret: "50pRHaAf8YIsXSvPfIUQm1R7oKg",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "social-media-app",
    resource_type: "image",
  },
});

const parser = multer({ storage: storage });

export { cloudinary, parser };
