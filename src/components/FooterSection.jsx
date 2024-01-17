import React from "react";
import AppProperties from "./AppProperties";
import FooterChart from "./FooterChart";

const FooterSection = () => {
  return (
    <div className=" md:pl-44 pl-5 mt-7 flex md:flex-row flex-col gap-5 md:mx-0 mx-6">
      <AppProperties />
      <FooterChart />
    </div>
  );
};

export default FooterSection;
