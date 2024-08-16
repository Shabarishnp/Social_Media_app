import React, { useState } from "react";
import profilepic from "../../assets/profile.jpg";
import {
  MdLabel,
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationPin,
} from "react-icons/md";

const UploadPost = () => {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [preview, setPreview] = useState(null);
  // const { user } = useContext(AuthContext);
  console.log(desc);
  console.log(file);

  return (
    <div className="w-full h-[170px] rounded-lg shadow-lg ">
      <div className="wrapper p-[10px]">
        <div className="top flex items-center">
          <img
            src={profilepic}
            alt="profilepic"
            className="w-[50px] h-[50px] rounded-full mr-[10px] object-cover"
          />
          <input
            type="text"
            placeholder="What is on your mind?"
            className="w-[80%] focus:outline-none"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <hr className="m-[20px]" />
        <div className="bottom flex items-center justify-between">
          <div className="flex ml-[20px]">
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdPermMedia className="mr-[3px] text-violet-500" />
              <span>Photo or Vedio</span>
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdLabel className="mr-[3px] text-orange-500" />
              <span>Tags</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdEmojiEmotions className="mr-[3px] text-yellow-500" />
              <span>Emoji</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdLocationPin className="mr-[3px] text-blue-500" />
              <span>Location</span>
            </div>
          </div>
          <button className="bg-customDarkViolet text-white p-[7px] rounded-lg font-semibold">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
