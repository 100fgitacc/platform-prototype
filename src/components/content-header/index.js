// NotFoundPage.js
import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ContentHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['header-image']}>
                <img src='../assets/img/header-bg.png' alt='background'/>
            </div>
            <div className={styles['header-info']}>
                <div className={styles.avatar}>
                    <img src='../assets/img/account-ava.png' alt='avatar'/>
                </div>
                <div className={styles.desc}>
                    <h2 className={styles.title}>James Smith</h2>
                    <div>
                        <div className={styles['sub-info']}>
                            <p className={styles.role}>@investor</p>
                            <p className={styles.date}>11.05.1988</p>
                            <div className={styles.country}>
                                <img src='../assets/img/icons/usa.png' alt='usa icon'/>
                                <p>USA</p>
                            </div>
                            <p className={styles.status}>Active now</p>
                        </div>
                       
                        <div className={styles.rate}>
                            <div className={styles.name}>
                                <img src='../assets/img/icons/moon.png' alt='moon icon'/>
                                <p>Moon</p>
                            </div>
                            <p className={styles.count}>#1</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
