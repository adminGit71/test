// SalesLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineChart = ({ chartData, mode }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
      title: {
        display: false,
        text: 'Average Sales Over Time',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 26
        }
      },
      y: {
        grid: {
          borderDash: [5, 5],
          color: mode === 'dark' ? "#27272A" : "#E4E4E7",
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          padding: 12
        },
        beginAtZero: true,

      },
    },
    elements: {
      point: {
        radius: 0, // this will hide points
        hoverRadius: 7,
        hoverBorderWidth: 1
      },
      line: {
        borderWidth: 1
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
