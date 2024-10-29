import React from 'react';
import styles from './index.module.css';
import { Bar  } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['10.09', '13.09', '16.09', '18.09', '20.09'],
    datasets: [
      {
        data: [10, 62, 30, 50, 25],
        backgroundColor: '#E3EAFC', 
        borderColor: 'transparent', 
        borderWidth: 1,
        barThickness: 45,
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false,
      
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
        title: {
          display: false,
        },
        
        grid: {
          drawBorder: false,
          color: '#ECECEC',
        },
        ticks: {
          stepSize: 20, 
        }
      },
      x: {
        title: {
          display: false,
      
        },
        grid: {
          display: false,
        }
      }
    }
  };
    return(
      <Bar data={data} options={options}  className={styles['bar-chart']}/>
    );
}

export default BarChart;