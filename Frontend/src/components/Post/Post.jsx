import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import profilePic from "../../assets/profile.jpg";
import firstpost from "../../assets/firstpost.jpg";
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";

const Post = () => {
//   const [like, setLike] = useState(Post.like);
//   const [dislike, setDislike] = useState(false);

//   const handleLike = () => {
//     setLike(!setLike ? like - 1 : like + 1);
//     setDislike(false);
//   };
  return (
    <div className="w-full rounded-md shadow-lg mt-[30px] mb-[30px] p-[10px]">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={profilePic}
              alt="picture"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="font-bold ml-[10px] mr-[10px]">Shabarish N P</span>
            <span className="text-sm">lets...! start no time</span>
          </div>
          <div>
            <MdOutlineMoreVert className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[20px]">
        <span>This is a first post...!</span>
        <img
          src={firstpost}
          alt="firstpic"
          className="mt-[20px] w-full object-contain"
          style={{ maxHeight: "500px" }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <img
            src={likeIcon}
            alt="like_icon"
            className="w-[34px] h-[34px] cursor-pointer"
            // onClick={handleLike}
          />
          <img
            src={heartIcon}
            alt="heart_icon"
            className="w-[24px] h-[24px] cursor-pointer"
            // onClick={handleLike}
          />
          <span className="text-sm">1000 likes</span>
        </div>
        <div>
          <span className="cursor-pointer border-b-[1px] border-slate-300 text-sm">
            200 comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
