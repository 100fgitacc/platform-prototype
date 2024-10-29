import React from 'react';
import styles from './index.module.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler
} from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale,Filler);

const LineChart = () => {
  const data = {
    labels: ['10.09', '11.09', '12.09','13.09', '14.09','15.09', '16.09', '17.09', '18.09', '19.09','20.09'],
    datasets: [
      {
        data: [0, 35, 25, 75, 15, 65, 35, 36, 55, 15, 0],
        backgroundColor: '#E3EAFC', 
        borderColor: '#073FC2', 
        borderWidth: 2,
        fill: true, 
        tension: 0.5, 
        pointBackgroundColor: 'transparent', 
        pointBorderColor: 'transparent',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, 
        },
        title: {
          display: false,
          text: 'Amount',
        },
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
      },
      x: {
        display: true,
        ticks: {
          maxRotation: 90, 
          minRotation: 90, 
          
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        pointStyle: 'circle',
      },
    },
  };

  return <Line data={data} options={options}  className={styles['line-chart']}/>;
};

export default LineChart;
