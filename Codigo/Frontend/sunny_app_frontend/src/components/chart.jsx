import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Define a functional component named Chart that takes a prop 'data_table'
export function Chart({ data_table }) {
  // Register Chart.js components for use in the chart
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  // Define the options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data Chart",
      },
    },
  };

  // Define labels for the x-axis of the chart
  const labels = [
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12",
    "D13",
    "D14",
    "D15",
    "D16",
    "D17",
    "D18",
    "D19",
    "D20",
  ];

  // Define the data for the chart
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        // Extract the 'Value' property from each item in 'data_table'
        data: data_table.map((item) => item.Value),
        borderColor: "#ea580c",
        backgroundColor: "#ea580c",
      },
    ],
  };

  // Render the Line component from react-chartjs-2 with options and data
  return <Line options={options} data={data} />;
}
