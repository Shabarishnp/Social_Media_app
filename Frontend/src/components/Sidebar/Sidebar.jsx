// import React from "react";
import { SiFeedly } from "react-icons/si";
// import profilepic from "../../assets/profile.jpg";
import { Friends } from "../../data/dummyData";
import FriendsList from "../FriendsList/FriendsList";
const Sidebar = () => {
  return (
    <div
      style={{ flex: 3, height: "calc(100vh - 70px)" }}
      className="custom-scrollbar overflow-y-auto sticky top-[70px]"
    >
      <div className="border p-[20px]">
        <ul className="sidebarList m-0 p-0">
          <li>
            <SiFeedly />
            <span>Feeds</span>
          </li>
          <li>
            <SiFeedly />
            <span>Vedios</span>
          </li>
          <li>
            <SiFeedly />
            <span>Groups</span>
          </li>
          <li>
            <SiFeedly />
            <span>Chats</span>
          </li>
          <li>
            <SiFeedly />
            <span>Bookmarks</span>
          </li>
          <li>
            <SiFeedly />
            <span>Questions</span>
          </li>
          {/* <li>
            <SiFeedly />
            <span>Jobs</span>
          </li>
          <li>
            <SiFeedly />
            <span>Courses</span>
          </li>
          <li>
            <SiFeedly />
            <span>Events</span>
          </li> */}
        </ul>
        <div className="button">
          <button className="rounded-md bg-slate-200 w-[150px] p-[10px]">
            {" "}
            See More
          </button>
        </div>
        <hr className="mt-[20px]" />
        <div className="mt-[20px]">
          <ul className="sidebarList">
            {Friends.map((friend) => (
              <FriendsList key={friend.id} friend={friend} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
