import React from "react";
import Logo from "../Logo/Logo";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp, IoNotificationsSharp } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="h-[70px] w-full bg-customDarkViolet flex items-center sticky top-0">
      <div className="left" style={{ flex: 3 }}>
        <div className="logodiv cursor-pointer">
          <Logo />
        </div>
      </div>
      <div className="center" style={{ flex: 5 }}>
        <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
          <CiSearch className="text-xl ml-[10px]" />
          <input
            type="text"
            className="serach w-full focus:outline-none bg-none m-[10px]"
            placeholder="Search"
          />
        </div>
      </div>
      <div
        className="right flex items-center justify-around text-white"
        style={{ flex: 4 }}
      >
        <div className="tablinks text-lg cursor-pointer flex gap-[10px]">
          <span className="firsttablink font-bold">Home</span>
          <span className="secondtablink font-bold">Timeline</span>
        </div>
        <div className="tabicons flex gap-5">
          <div className="firsttabicon cursor-pointer relative">
            <IoPersonCircleSharp className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="secondtabicon cursor-pointer relative">
            <PiChatsFill className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="thirdtabicon cursor-pointer relative">
            <IoNotificationsSharp className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
        </div>
        <div className="profilepic">
          <img
            src={profile}
            alt=""
            className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
