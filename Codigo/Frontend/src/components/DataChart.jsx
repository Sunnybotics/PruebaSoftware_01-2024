import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataChart = ({ datos }) => {
  const chartData = {
    labels: datos.map((registro) => registro.fecha),
    datasets: [
      {
        label: "Valor",
        data: datos.map((registro) => registro.valor),
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: [
        {
          type: 'time',
          time: {
            parser: 'YYYY-MM-DD',
            unit: 'day',
            displayFormats: {
              day: 'MM/DD/YYYY',
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Fecha',
          },
        },
      ],
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Valor',
          },
        },
      ],
    },
  };

  return (
    <div className="data-chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default DataChart;
