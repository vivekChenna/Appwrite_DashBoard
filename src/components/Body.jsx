import React, { useContext } from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import Header from "./Header";
import ResponsiveSideBar from "./ResponsiveSideBar";
import Context from "../Context/Context";

const Body = () => {
  const { isSideBarOpen } = useContext(Context);

  return (
    <div className=" flex flex-col bg-[#19191D] h-full rounded-[26px]">
      <Header />
      <div className="flex">
        {isSideBarOpen ? null : <SideBar />}
        <MainContainer />
        {isSideBarOpen ? <ResponsiveSideBar /> : null}
      </div>
    </div>
  );
};

export default Body;
