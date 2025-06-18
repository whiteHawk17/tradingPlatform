import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  'rgba(255, 99, 132, 0.7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(255, 206, 86, 0.7)',
  'rgba(75, 192, 192, 0.7)',
  'rgba(153, 102, 255, 0.7)',
  'rgba(255, 159, 64, 0.7)',
  'rgba(40, 167, 69, 0.7)',
  'rgba(255, 99, 71, 0.7)',
  'rgba(0, 123, 255, 0.7)',
  'rgba(255, 193, 7, 0.7)'
];

const BORDER_COLORS = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(40, 167, 69, 1)',
  'rgba(255, 99, 71, 1)',
  'rgba(0, 123, 255, 1)',
  'rgba(255, 193, 7, 1)'
];

const DounbtChart = ({ watchlistData }) => {
  const labels = watchlistData.map(stock => stock.name);
  const prices = watchlistData.map(stock => stock.price);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: prices,
        backgroundColor: COLORS.slice(0, labels.length),
        borderColor: BORDER_COLORS.slice(0, labels.length),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14,
            family: 'Inter, Arial, sans-serif',
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Watchlist Stock Price Distribution',
        font: {
          size: 20,
          family: 'Inter, Arial, sans-serif',
        },
        color: '#222',
        padding: { top: 10, bottom: 30 },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ₹${context.parsed}`;
          }
        }
      }
    },
    cutout: '70%',
    layout: {
      padding: 20
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 24 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DounbtChart; 