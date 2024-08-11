import React from "react";
import friendspic from "../../assets/profile.jpg";

const Rightbar = ({ profile }) => {
  const RightBarHome = () => {
    return (
      <>
        <div>
          <img src="" alt="" />
          <span className="ml-7">
            <b>Shabarish</b> and <b> 1 more</b> have birthday today
          </span>
        </div>
      </>
    );
  };

  const RightBarProfile = () => {
    return (
      <>
        <h1 className="font-bold text-xl mb-[10px] ml-2">User Information</h1>
        <div className="mb-[30px] ml-3">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>Bangalore</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              From:
            </span>
            <span>Hariahr</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>Single</span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src={friendspic}
                alt="user pic"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Happy Coding...</span>
            </div>
            <div>
              <img
                src={friendspic}
                alt="user pic"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Happy Coding...</span>
            </div>
            <div>
              <img
                src={friendspic}
                alt="user pic"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Happy Coding...</span>
            </div>
            <div>
              <img
                src={friendspic}
                alt="user pic"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Happy Coding...</span>
            </div>
            <div>
              <img
                src={friendspic}
                alt="user pic"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Happy Coding...</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ flex: 3.5 }}>
      <div className="pt-[20px] pr-[20px]">
        {profile ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;

{
  /* <>
        <div className="flex items-center">
          <img
            src={birthdayIcon}
            alt="birthday icon"
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <span className="font-semibold text-md">
            <b>Henry Crentsil</b> and <b>52 others</b> have a birthday today
          </span>
        </div>
        <img
          src={adImage}
          alt="advert Image"
          className="w-full rounded-lg mt-[30px] mb-[30px]"
        />
        <h1 className="font-bold text-lg mb-[20px]">Online</h1>
        <ul className="m-0 p-0">
          {Users.map((user) => (
            <OnlineUsers key={user.id} user={user} />
          ))}
        </ul>
      </> */
}

{
  /* <h1 >User Information</h1>
        <div className="mb-[30px]">
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
                : "It's Complicated"}
            </span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            {friends.map((friend) => (
              <Link to={`/profile/${friend?.username}`}>
                <div key={friend._id} className="flex flex-col items-center">
                  <img
                    src={
                      friend.profilePicture ? friend.profilePicture : profilePic
                    }
                    alt="user picture"
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <span>{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </div> */
}
