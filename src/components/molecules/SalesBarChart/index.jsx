import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSelector } from 'react-redux';

const SalesBarChart = () => {
    const data = useSelector((state) => state.sales.dataSales);

    const chartData = {
        labels: data.map(val => val.product), 
        datasets: [
          {
            label: 'Sales Data',
            data: data.map(val => val.sales),
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      };

      const options = {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      };

    return (
        <Bar data={chartData} options={options} />
    )
}

export default SalesBarChart