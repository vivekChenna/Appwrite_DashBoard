import React from "react";
import AppProperties from "./AppProperties";
import FooterChart from "./FooterChart";

const FooterSection = () => {
  return (
    <div className=" pl-44 mt-7 flex gap-5">
      <AppProperties />
      <FooterChart />
    </div>
  );
};

export default FooterSection;
