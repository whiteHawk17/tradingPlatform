import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holdings: Stock Price Chart',
    },
  },
};

// holdingsData: array of objects [{ name: 'TCS', price: 1234 }, ...]
const VerticalGraph = ({ holdingsData }) => {
  const labels = holdingsData.map(stock => stock.name);
  const prices = holdingsData.map(stock => stock.price);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: prices,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalGraph; 