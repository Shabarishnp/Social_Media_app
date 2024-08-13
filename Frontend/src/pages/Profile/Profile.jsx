// import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import coverimage from "../../pages/Profile/assets/cover.jpg";
import profileimage from "../../pages/Profile/assets/profile.jpg";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 9, zIndex: -1 }}>
          <div>
            <div className="h-[350px] relative">
              <img
                src={coverimage}
                alt="coverpic"
                className="w-full h-[250px] object-cover"
              />
              <img
                src={profileimage}
                alt="profilepicture"
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl">Shabarish N P</h1>
              <span>MERN Stack Developer</span>
            </div>
          </div>
          <div className="flex">
            <NewsFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
