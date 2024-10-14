import React, { useState } from 'react';
import styles from './index.module.css';



const Header = () => {
    return(
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                <li className={`${styles['menu-item']} `}>
                    <p>Projects</p>
                </li>
                <li className={`${styles['menu-item']} `}>
                    <p>Services</p>
                </li>
                <li className={`${styles['menu-item']} `}>
                    <p>Blog</p>
                </li>
                <li className={`${styles['menu-item']} `}>
                    <p>All courses</p>
                </li>
                <li className={`${styles['menu-item']} `}>
                    <p>Affiliate Program</p>
                </li>
            </ul>
            <button className={styles['profile-settings']}>
                <img src='../assets/img/avatar.png' alt='avatar'/>
            </button>
        </div>
    );
}

export default Header;