import React from "react";
import Chart from "./Chart";

const ChartSection = () => {
  return (
    <div className="flex gap-8 pl-44 -mt-10">
      <Chart flag={true} title="Bandwidth" />
      <Chart flag={false} title="Requests" />
    </div>
  );
};

export default ChartSection;
