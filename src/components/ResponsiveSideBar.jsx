import React, { useContext } from "react";
import SideBar from "./SideBar";
import { useRef } from "react";
import Context from "../Context/Context";

const ResponsiveSideBar = () => {
  const { setIsSideBarOpen, isSideBarOpen } = useContext(Context);

  const sidebar = useRef();

  const closeSideBar = (e) => {
    if (sidebar.current === e.target) {
      setIsSideBarOpen(!isSideBarOpen);
    }
  };

  return (
    <div
      className=" fixed inset-0 backdrop-blur-sm bg-opacity-55 bg-[#19191D]"
      ref={sidebar}
      onClick={closeSideBar}
    >
      <SideBar />
    </div>
  );
};

export default ResponsiveSideBar;
