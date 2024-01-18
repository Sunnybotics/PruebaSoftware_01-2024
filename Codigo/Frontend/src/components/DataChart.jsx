import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const DataChart = ({ myData }) => {
  const chartData = {
    labels: myData.map((item) => item.fecha),
    datasets: [
      {
        label: "Value",
        data: myData.map((item) => item.valor),
        borderColor: "#0835354b",
        backgroundColor: "#0835354b",
        fill: true,
      },
    ],
  };
  var chartOptions = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
      x: {
        ticks: { color: "rgb(8, 14, 27)" },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    },
  };

  return (
    <>
      <Line
        data={chartData}
        options={chartOptions}
        style={{
          width: "500px",
          height: "250px",
        }}
      />
    </>
  );
};

export default DataChart;
