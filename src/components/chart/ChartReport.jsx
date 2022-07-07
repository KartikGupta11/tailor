import React from "react";
import { useState } from "react";
import "./chart.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const AnalyticsData = [
  {
    payment: 10,
    return: 80,
    month: "Jan",
  },
  {
    payment: 40,
    return: 40,
    month: "Feb",
  },
  {
    payment: 60,
    return: 60,
    month: "March",
  },
  {
    payment: 80,
    return: 70,
    month: "April",
  },
  {
    payment: 150,
    return: 80,
    month: "May",
  },
  {
    payment: 60,
    return: 100,
    month: "june",
  },
  {
    payment: 170,
    return: 140,
    month: "july",
  },
  {
    payment: 90,
    return: 160,
    month: "Aug",
  },
  {
    payment: 90,
    return: 20,
    month: "Sep",
  },
  {
    payment: 100,
    return: 100,
    month: "Oct",
  },
  {
    payment: 110,
    return: 40,
    month: "Nov",
  },
  {
    payment: 120,
    return: 20,
    month: "Dec",
  },
];

const ChartReport = () => {
  const [data, setData] = useState({
    labels: AnalyticsData.map((d) => d.month),

    datasets: [
      {
        label: "Returns Orders",
        data: AnalyticsData.map((d) => d.return),

        return: 20,
        backgroundColor: " rgba(252,146,154,1)  ",
        borderColor: "#EA6872",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <div className="dashboard2">
      <div className="disp">
        <div className="bxe">
          <div className="" style={{ width: "500px", height: "auto" }}>
            <h2 className="head">Returns Analytics</h2>
            <Line data={data}>Hello</Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartReport;

//  backgroundColor: "linear-gradient(90deg, rgba(252,146,154,1) 0%, rgba(255,229,231,1) 35%)",
