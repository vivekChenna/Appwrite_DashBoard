import React, { useContext } from "react";
import AppLogo from "../assets/Images/HeaderImages/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Context from "../Context/Context";

const Header = () => {
  const { setIsSideBarOpen } = useContext(Context);

  return (
    <div className="h-[65px] border-b border-gray-600 px-[23px] py-[14px] flex items-center md:justify-between md:gap-0 gap-4">
      <div className=" block md:hidden">
        <GiHamburgerMenu
          color="white"
          cursor="pointer"
          fontSize="1.2rem"
          onClick={() => setIsSideBarOpen(true)}
        />
      </div>

      <div className=" flex items-center">
        <div className=" flex text-lg items-center gap-[6px]">
          <div className=" w-[20px]">
            <img src={AppLogo} alt="app-logo" />
          </div>
          <p className=" font-semibold text-white opacity-85 text-[17px]">
            appwrite
          </p>
        </div>
        <div className=" flex items-center gap-[9px] text-gray-400 mx-[10px]">
          <p>/</p>
          <p>Acme Corp</p>
          <p>/</p>
        </div>
        <p className=" text-white opacity-85">First Appwrite project</p>
      </div>

      <div className=" md:flex items-center hidden">
        <div className=" flex items-center gap-6">
          <Link to="#">
            <p className=" opacity-90 text-white text-[14px] font-medium">
              Support
            </p>
          </Link>
          <button className=" text-white opacity-90 text-[14px] px-2 py-[6px] border border-gray-600 font-medium bg-[#1A2421] rounded-md">
            Upgrade
          </button>
        </div>

        <div className=" h-[65px] border-l border-gray-600 mx-7"></div>

        <div className="flex items-center gap-[37px]">
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
    </div>
  );
};

export default Header;
