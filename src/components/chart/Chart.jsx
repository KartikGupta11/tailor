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
    payment: 80,
    completeOrder: 20,
    month: "Jan",
    timeline: 10,
  },
  {
    payment: 30,
    completeOrder: 50,
    month: "Feb",
    timeline: 40,
  },
  {
    payment: 60,
    completeOrder: 30,
    month: "March",
    timeline: 20,
  },
  {
    payment: 120,
    completeOrder: 70,
    month: "April",
    timeline: 80,
  },
  {
    payment: 140,
    completeOrder: 20,
    month: "May",
    timeline: 60,
  },
  {
    payment: 90,
    completeOrder: 120,
    month: "june",
    timeline: 120,
  },
  {
    payment: 140,
    completeOrder: 80,
    month: "july",
    timeline: 40,
  },
  {
    payment: 100,
    completeOrder: 60,
    month: "Aug",
    timeline: 70,
  },
  {
    payment: 120,
    completeOrder: 200,
    month: "Sep",
    timeline: 55,
  },
  {
    payment: 130,
    completeOrder: 75,
    month: "Oct",
    timeline: 25,
  },
  {
    payment: 220,
    completeOrder: 55,
    month: "Nov",
    timeline: 80,
  },
  {
    payment: 240,
    completeOrder: 40,
    month: "Dec",
    timeline: 30,
  },
];

const Chart = () => {
  const [data, setData] = useState({
    labels: AnalyticsData.map((d) => d.month),
    timeline: 10,

    datasets: [
      {
        label: "Pending Orders",
        data: AnalyticsData.map((d) => d.completeOrder),
        completeOrder: 20,
        backgroundColor: " rgba(252,146,154,1)  ",
        borderColor: "#EA6872",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "Complete Orders",
        data: AnalyticsData.map((d) => d.completeOrder),
        completeOrder: 20,
        backgroundColor: "#FDF0F1",
        borderColor: "#FDF0F1",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  //payment analytics
  const [dataPay, setDataPay] = useState({
    labels: AnalyticsData.map((d) => d.month),
    timeline: 10,

    datasets: [
      {
        label: "Pending Payment",
        data: AnalyticsData.map((d) => d.payment),
        completeOrder: 20,
        backgroundColor: " rgba(252,146,154,1)  ",
        borderColor: "#EA6872",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "Complete payment",
        data: AnalyticsData.map((d) => d.payment),
        completeOrder: 20,
        backgroundColor: "#FDF0F1",
        borderColor: "#FDF0F1",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  //timeline analytics
  const [dataTimeline, setDataTimeline] = useState({
    labels: AnalyticsData.map((d) => d.month),
    timeline: 10,

    datasets: [
      {
        label: "Pending orders",
        data: AnalyticsData.map((d) => d.payment),
        completeOrder: 20,
        backgroundColor: " rgba(252,146,154,1)  ",
        borderColor: "#EA6872",
        tension: 0.5,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "Complete orders",
        data: AnalyticsData.map((d) => d.payment),
        completeOrder: 20,
        backgroundColor: "#FDF0F1",
        borderColor: "#FDF0F1",
        tension: 0.5,
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
            <h2 className="head">Order Analytics</h2>

            <Line data={data}></Line>
          </div>
        </div>
        <div className="bxe">
          <div className="" style={{ width: "500px", height: "auto" }}>
            <h2 className="head">Earning Analytics</h2>

            <Line data={dataPay}></Line>
          </div>
        </div>
        <div className="bxe">
          <div className="" style={{ width: "500px", height: "auto" }}>
            <h2 className="head">TimeLine Analytics</h2>
            <Line data={dataTimeline}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

//  backgroundColor: "linear-gradient(90deg, rgba(252,146,154,1) 0%, rgba(255,229,231,1) 35%)",
