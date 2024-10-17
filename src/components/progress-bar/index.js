import React from 'react';
import styles from './index.module.css';

const ProgressBar = ({progress}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles['progress-bar']}>
                <span className={styles['progress-bar-status']} 
                style={{ width: `${progress}%` }}
                ></span>
            </div>
            <p className={styles['progress-percentage']}>
                <span>{progress} %</span> completed
            </p>
    </div>
    );
}

export default ProgressBar;