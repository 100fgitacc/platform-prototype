import React from 'react';
import styles from './index.module.css';
import { Bar  } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({data}) => {
 
  
    return(
      <Bar data={data.config} options={data.options}  className={styles['bar-chart']}/>
    );
}

export default BarChart;