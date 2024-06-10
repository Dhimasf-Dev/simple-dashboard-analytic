import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSelector } from 'react-redux';

const SalesLineChart = () => {
    const data = useSelector((state) => state.sales.dataSales);

    const chartData = {
        labels: data.map(val => val.date), 
        datasets: [
          {
            label: 'Daily Sales',
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
        <Line data={chartData} options={options} />
    )
}

export default SalesLineChart