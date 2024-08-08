import React from "react";
import { SiFeedly } from "react-icons/si";

const Sidebar = () => {
  return (
    <div style={{ flex: 3, height: "calc(100vh - 70px)" }} className="">
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
          <li>
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
          </li>
        </ul>
        <div className="button">
          <button className="rounded-full w-[150px] p-[20px]">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
