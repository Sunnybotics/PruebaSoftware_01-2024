import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export function Chart({data_table}){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Data Chart',
          },
        },
      };
      
      const labels = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20' ];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset',
            data: data_table.map(item => item.Value),
            borderColor: '#ea580c',
            backgroundColor: '#ea580c',
          },
        ],
      };
    return(
        <Line options={options} data={data} />
    );

}



