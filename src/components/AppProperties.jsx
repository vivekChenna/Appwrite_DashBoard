import React from "react";
import SingleProperty from "./SingleProperty";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import FunctionsIcon from "../assets/Images/SideBarImages/Plugin_Icon.png";

const AppProperties = () => {
  const propertiesData = [
    {
      icon: <FaDatabase color="#99AAAB" fontSize="0.9rem" />,
      iconName: "DATABASES",
      value: "4",
      valueName: "Databases",
      property: "Documents: 20",
    },
    {
      icon: <FaFolder color="#99AAAB" fontSize="0.95rem" />,
      iconName: "STORAGE",
      value: "8.0",
      valueName: "Storage",
      property: "Buckets: 44",
    },
    {
      icon: <FaUsers color="#99AAAB" fontSize="1.1rem" />,
      iconName: "AUTHENTICATION",
      value: "4K",
      valueName: "Users",
      property: "Sessions: 20K",
    },
    {
      icon: <img src={FunctionsIcon} alt="functions" />,
      iconName: "FUNCTIONS",
      value: "12",
      valueName: "Executions",
    },
  ];

  return (
    <div className=" flex flex-wrap w-[60%] gap-8">
      <SingleProperty data={propertiesData[0]} />
      <SingleProperty data={propertiesData[1]} />
      <SingleProperty data={propertiesData[2]} />
      <SingleProperty data={propertiesData[3]} />
    </div>
  );
};

export default AppProperties;
