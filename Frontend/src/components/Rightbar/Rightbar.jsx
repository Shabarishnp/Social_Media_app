// import React from "react";
import friendspic from "../../assets/profile.jpg";

const Rightbar = ({ user }) => {
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
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
