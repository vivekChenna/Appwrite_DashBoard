import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import Header from "./Header";

const Body = () => {
  return (
    <div className=" flex flex-col bg-[#19191D] h-full rounded-[26px]">
      <Header />
      <div className="flex">
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
