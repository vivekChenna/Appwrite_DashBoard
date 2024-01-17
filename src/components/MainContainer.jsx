import React from "react";
import AppwriteProject from "./AppwriteProject";
import ChartSection from "./ChartSection";
import FooterSection from "./FooterSection";

const MainContainer = () => {
  return (
    <div className=" w-full overflow-hidden md:overflow-visible h-full md:mb-0 mb-5">
      <AppwriteProject />
      <ChartSection />
      <FooterSection />
    </div>
  );
};

export default MainContainer;
