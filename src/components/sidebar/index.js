import React, { useState } from 'react';
import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({renderPage}) => {
    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);

    const [activePage, setActivePage] = useState('Profile');
    const handleMenuItemClick = (e) => {
        setActivePage(e);
        renderPage(e);
    }
    const navigate = useNavigate();
    const handleExit = () => {
        navigate('/');
    }
    return(
        <div className={`${styles.sidebar} ${isExploreCourse? styles.hide : ''}`}>
           <Link to='/' className={`${styles.logo} main-logo`}>
                <img src='../assets/img/logo.png' alt='logo'/>
            </Link>
            <ul className={styles.menu}>
                <li className={`${styles['menu-item']}`}>
                   <p>COMMUNITY</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Profile' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Profile')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/user.png' alt='icon'/>
                    </div>
                    <p>Profile</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Notifications' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Notifications')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/bell.png' alt='icon'/>
                    </div>
                    <p>Notifications</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Messages' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Messages')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/mail.png' alt='icon'/>
                    </div>
                    <p>Messages</p>
                </li>
            </ul>
            <ul className={styles.menu}>
                <li className={`${styles['menu-item']}`}>
                   <p>LINKS</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Blog' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Blog')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/clipboard-list.png' alt='icon'/>
                    </div>
                    <p>Blog</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Services' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Services')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/list.png' alt='icon'/>
                    </div>
                    <p>Services</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'AffiliateProgram' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('AffiliateProgram')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/heart-handshake.png' alt='icon'/>
                    </div>
                    <p>Affiliate Program</p>
                </li>
            </ul>
            <ul className={styles.menu}>
                <li className={`${styles['menu-item']}`}>
                   <p>LINKS</p>
                </li>
                <li className={`${styles['menu-item']} ${activePage === 'Settings' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Settings')}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/settings.png' alt='icon'/>
                    </div>
                    <p>Settings</p>
                </li>
                <li className={`${styles['menu-item']}`} onClick={()=>handleExit()}>
                    <div className={styles.icon}>
                        <img src='../assets/img/icons/log-out.png' alt='icon'/>
                    </div>
                    <p>Log Out</p>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;