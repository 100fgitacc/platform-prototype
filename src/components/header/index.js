import React, { useState } from 'react';
import styles from './index.module.css';
import { useSelector } from 'react-redux';


const Header = ({profileType}) => {

   
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);

    
    return(
        <div className={`${styles.wrapper} ${isHidden && styles['full-width']}`}>
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
                {profileType ==='project' ? (
                    <img src='../assets/img/project-avatar.png' alt='avatar'/>
                    
                ) : (
                    <img src='../assets/img/avatar.png' alt='avatar'/>
                )}
                
            </button>
        </div>
    );
}

export default Header;