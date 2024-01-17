import React from "react";
import Chart from "./Chart";

const ChartSection = () => {
  return (
    <div className="flex md:flex-row flex-wrap gap-8 md:pl-44 pl-4 -mt-10 mx-5 md:mx-0">
      <Chart flag={true} title="Bandwidth" />
      <Chart flag={false} title="Requests" />
    </div>
  );
};

export default ChartSection;
