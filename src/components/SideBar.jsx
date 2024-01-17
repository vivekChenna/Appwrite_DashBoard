import React, { useContext } from "react";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import FunctionsIcon from "../assets/Images/SideBarImages/Plugin_Icon.png";
import { IoMdSettings } from "react-icons/io";
import Context from "../Context/Context";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = () => {
  const { isSideBarOpen } = useContext(Context);

  return (
    <div
      className={
        isSideBarOpen
          ? " px-4 pt-4 pb-4 w-52 md:flex flex-col h-screen justify-between border-r border-gray-600"
          : "hidden px-4 pt-4 pb-4 w-52 md:flex flex-col h-[91vh] justify-between border-r border-gray-600"
      }
    >
      {
        <div className="md:hidden flex flex-col mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-[10px]">
              <div className="flex w-[45px] h-[45px]  items-center justify-center rounded-full bg-gray-600">
                <p className="font-medium text-white opacity-80">WO</p>
              </div>

              <div className=" flex flex-col">
                <p className="text-white opacity-80 text-[14px]">
                  Walter O'Brien
                </p>
                <p className=" text-[13px] text-gray-400 font-medium">
                  Acme Corp
                </p>
              </div>
            </div>

            <FaAngleDown color="white" cursor="pointer" />
          </div>
        </div>
      }

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

      <button
        className={
          isSideBarOpen
            ? "hover:bg-[#616C6F] hover:bg-opacity-55 mt-5 flex items-center gap-[14px] rounded-md p-[10px] w-full"
            : "hover:bg-[#616C6F] hover:bg-opacity-55 flex items-center gap-[14px] rounded-md p-[10px] w-full"
        }
      >
        <IoMdSettings color="#99AAAB" fontSize="1.2rem" />
        <p className=" text-white opacity-80">Settings</p>
      </button>

      <div
        className="md:hidden mx-10
         mt-6"
      >
        <button className=" text-white opacity-80 text-[14px] font-medium rounded-md flex flex-col">
          Upgrade
        </button>
        <Link to="#" className=" pl-5">
          <p className=" opacity-80 text-white text-[16px] font-medium mt-1">
            Support
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
