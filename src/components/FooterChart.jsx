import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 13;
defaults.plugins.title.color = "#777E8B";

const FooterChart = () => {
  return (
    <div className=" w-[305px] rounded-xl border border-gray-600 px-7 pt-4 pb-10 h-[292px] md:mx-0 mx-9">
      <p className=" text-white text-[28px] font-medium">10</p>
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Total Sales",
              data: [25, 35, 32, 75, 39, 44, 70, 80, 95, 22, 48, 86, 95],
              backgroundColor: "#EC4849",
              borderColor: "#EC4849",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Realtime Connections",
            },
          },
        }}
      />
    </div>
  );
};

export default FooterChart;
