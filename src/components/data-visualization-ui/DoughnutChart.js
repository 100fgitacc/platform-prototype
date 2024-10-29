import React, { useState } from 'react';
import styles from './index.module.css';
import { Doughnut  } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register( LinearScale, Title, Tooltip, Legend, CategoryScale, ArcElement);

const DoughnutChart = () => {
     const data = {
        labels: [],
        datasets: [
          {
            data: [20, 60, 20, 15, 30, 10, 30, 20, 15],
            backgroundColor: [
              '#7DA3FF',
              '#A4B9D5',
              '#1858F3',
              '#FF8819',
              '#073FC2',
              '#1858F3',
              '#2F467B',
              '#FEA42F',
              '#CADBFF',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
              },
            },
          },
        },
        cutout: '10%',
      };
    return(
        <Doughnut data={data} options={options}  className={styles['doughnut-wrapper']}/>
    );
}

export default DoughnutChart;