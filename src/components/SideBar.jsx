import React from "react";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import FunctionsIcon from "../assets/Images/SideBarImages/Plugin_Icon.png";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <div className= "px-4 pt-4 pb-4 w-52 flex flex-col h-[91vh] justify-between border-r border-gray-600">
      <div className="flex flex-col gap-[14px]">
        <button className=" hover:bg-[#616C6F] hover:bg-opacity-55  flex items-center gap-4 p-[10px] rounded-md">
          <BsFillFileBarGraphFill color="#99AAAB" fontSize="1.15rem" />
          <p className=" text-white opacity-80">Overview</p>
        </button>
        <button className=" hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-4 p-[10px] rounded-md">
          <FaUsers color="#99AAAB" fontSize="1.3rem" />
          <p className=" text-white opacity-80">Auth</p>
        </button>
        <button className=" hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-4 rounded-md p-[10px]">
          <FaDatabase color="#99AAAB" fontSize="1rem" />
          <p className=" text-white opacity-80">Databases</p>
        </button>
        <button className=" hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-[12px] rounded-md p-[10px]">
          <img src={FunctionsIcon} alt="functions" />
          <p className=" text-white opacity-80">Functions</p>
        </button>
        <button className="hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-4 rounded-md p-[10px]">
          <FaFolder color="#99AAAB" fontSize="1rem" />
          <p className=" text-white opacity-80">Storage</p>
        </button>
      </div>

      <button className="hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-[14px] rounded-md p-[10px]">
        <IoMdSettings color="#99AAAB" fontSize="1.2rem" />
        <p className=" text-white opacity-80">Settings</p>
      </button>
    </div>
  );
};

export default SideBar;
