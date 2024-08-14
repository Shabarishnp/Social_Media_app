import { useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";
// import axios from "axios";
import { getAllPosts, getTimeLinePost } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { Posts } from "../../data/dummyData";

const NewsFeed = ({ userPosts }) => {
  const [posts, setPosts] = useState([]);
  const { username } = useParams();
  console.log(username);
  useEffect(() => {
    const timelinePosts = async () => {
      try {
        const res = userPosts
          ? await getTimeLinePost(username)
          : await getAllPosts();
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    timelinePosts();
  }, [username]);
  return (
    <div style={{ flex: 5.5 }} className="p-[10px]">
      <UploadPost />
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
