import React from "react";
import { Bar, Line, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 14;
defaults.plugins.title.color = "#777E8B";

const Chart = ({ flag }) => {
  return (
    <div
      className=" w-[500px] h-[220px] border border-gray-600 rounded-2xl bg-[#19191D] bg-opacity-85 px-6 py-4
    "
    >
      {flag === true ? (
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
                text: "Bandwidth",
              },
            },
          }}
        />
      ) : (
        <Line
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
                text: "Requests",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;

// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, defaults } from "chart.js/auto";

// defaults.responsive = true;
// defaults.maintainAspectRatio = false;
// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

// const LineChart = () => {
//   return (
//     <div className=" w-[368px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded px-2">
//       <Line
//         className=""
//         data={{
//           labels: ["Dec", "April", "Sep", "Dec"],
//           datasets: [
//             {
//               label: "Total Sales",
//               data: [25, 35, 32, 75, 39],
//               backgroundColor: "#3498DB",
//               borderColor: "#3498DB",
//             },
//           ],
//         }}
//         options={{
//           plugins: {
//             title: {
//               text: "Total Sales",
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default LineChart;
