import React from "react";
import { IoCopy } from "react-icons/io5";

const AppwriteProject = () => {
  return (
    <div className=" bg-[#2F363F] bg-opacity-25 h-[180px] w-full pt-8 px-44 border-b border-gray-600">
      <div className=" flex flex-col gap-4">
        <h1 className=" text-white font-normal tracking-wide text-3xl opacity-90">
          Appwrite Project
        </h1>
        <button className=" flex items-center rounded-3xl w-max px-[15px] bg-gray-600 opacity-85 py-[7px] gap-[6px]">
          <IoCopy color="white" className=" bg-opacity-80" fontSize="0.85rem" />
          <button className=" text-white text-[14px]">Project ID</button>
        </button>
      </div>
    </div>
  );
};

export default AppwriteProject;
