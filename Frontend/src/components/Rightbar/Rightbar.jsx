import { useContext, useEffect, useState } from "react";
import friendspic from "../../pages/Profile/assets/user.png";
import { AuthContext } from "../../context/AuthContext";
import {
  followUser,
  getUserFriends,
  unfollowUser,
} from "../../../../Backend/services/user.service";
// import { Users } from "../../data/dummyData";
// import OnlineUsers from "../OnlineUsers/OnlineUsers";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import userModel from "../../../../Backend/models/user.model";

const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [isFollowed, setIsFollowed] = useState(
    currentUser?.followings.includes(user?.id)
  );

  useEffect(() => {
    setIsFollowed(currentUser?.followings.includes(user?.id));
  }, [currentUser, user?.id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await getUserFriends({ userId: user?.id });
        setFriends(res.data.friends);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user?.id]);

  const handleFollow = async () => {
    try {
      if (isFollowed) {
        await unfollowUser(currentUser._id, user._id);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await followUser(currentUser._id, user._id);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setIsFollowed(!isFollowed);
  };

  const RightBarHome = () => {
    return (
      <>
        <div>
          {/* <img src="" alt="" /> */}
          <span className="ml-7">
            <b>Shabarish</b> and <b> 1 more</b> have birthday today
          </span>
        </div>
        {/* <h1 className="font-bold text-lg mb-[20px]">Online</h1>
        <ul className="m-0 p-0">
          {Users.map((user) => (
            <OnlineUsers key={user.id} user={user} />
          ))}
        </ul> */}
      </>
    );
  };

  const RightBarProfile = () => {
    return (
      <>
        {user.username !== currentUser?.username && (
          <button
            className="bg-violet-500 text-white mt-10 mb-5 py-2 px-5 rounded-md cursor-pointer hover:bg-gray-700 transition"
            onClick={handleFollow}
          >
            {isFollowed ? "Following" : "Follow"}
          </button>
        )}
        <h1 className="font-bold text-xl mb-[10px] ml-2">User Information</h1>
        <div className="mb-[30px] ml-3">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>{user.city}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              From:
            </span>
            <span>{user.from}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Others"}
            </span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            {friends.map((friend) => (
              <Link to={`/profile/${friend?.username}`} key={friend._id}>
                <div className="flex flex-col items-center">
                  <img
                    src={
                      friend.profilePicture ? friend.profilePicture : friendspic
                    }
                    alt="user pic"
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <span>{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ flex: 3.5 }}>
      <div className="pt-[20px] pr-[20px]">
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
