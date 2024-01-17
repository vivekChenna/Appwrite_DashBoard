import React from "react";

const SingleProperty = ({ data }) => {
  return (
    <div className=" w-[330px] h-[130px] border border-gray-600 rounded-2xl bg-[#19191D] bg-opacity-90 pt-4 px-6">
      <div className=" flex items-center gap-[10px] mb-2">
        {data.icon}
        <p className="tracking-wider text-gray-400 opacity-80 font-medium text-[13px]">
          {data.iconName}
        </p>
      </div>

      <div className=" flex flex-col gap-3 mt-1">
        <p className=" font-semibold text-white text-[26px]">
          {data.value}
          {data.value === "8.0" ? <span className=" text-[16px] px-[6px]">MB</span> : null}
        </p>

        <div className=" flex justify-between items-center">
          <p className="text-gray-400 opacity-80 font-medium text-[14px]">
            {data.valueName}
          </p>
          <p className="text-gray-400 opacity-80 font-medium text-[14px]">
            {data?.property}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
