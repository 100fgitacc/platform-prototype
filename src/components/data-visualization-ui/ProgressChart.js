import React from 'react';
import styles from './index.module.css';

const ProgressBar = ({progress, context}) => {
    return(
        <div className={`${styles.wrapper} ${context === 'green' && styles['green']}`}>
            <div className={styles['progress-bar']}>
                <span className={styles['progress-bar-status']} 
                style={{ width: `${progress}%` }}
                ></span>
            </div>
    </div>
    );
}

export default ProgressBar;