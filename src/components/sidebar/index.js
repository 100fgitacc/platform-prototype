import React, { useState,useEffect } from 'react';
import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {toggleSidebar, resetSidebar, setActiveMenuItem } from '../../store';

const Sidebar = ({renderPage, profileType, currPage}) => {
    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);
    const activePage = useSelector((state) => state.explore.activeMenuItem);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleMenuItemClick = (e) => {
        
        if (renderPage, profileType, currPage) {
            dispatch(setActiveMenuItem(e));
            renderPage(e);
        } else {
            navigate('/investor');
        }
    }
    
    const handleExit = () => {
        navigate('/');
    }
  

    const handleToggleSidebar = () => {
        if (!isHidden) {
            dispatch(toggleSidebar());
        }else{
            dispatch(resetSidebar());
        }
       
    };

    useEffect(() => {
        if (isExploreCourse) {
            dispatch(resetSidebar());
        } else {
            dispatch(toggleSidebar());
        }
    }, [isExploreCourse, dispatch]);
    
    

    useEffect(() => {
        dispatch(setActiveMenuItem(currPage));
    }, []);

    useEffect(() => {
        if (activePage) {
            renderPage(activePage);
        }
    }, [activePage]);
    

    

    return(
        <>
            {profileType === 'project' ? (
                <div className={`${styles.sidebar} ${isHidden ? styles.hide : ''} `}>
                    <div>
                        {!isHidden ?(
                            <>
                                {/* <Link to='/' > */}
                                <div className={`${styles.logo} main-logo`}> 
                                    <img  src='../assets/img/logo.png' alt='logo'/>
                                </div>
                                {/* </Link> */}
                                <button className={styles['sidebar-button-close']} onClick={handleToggleSidebar}><img src='../assets/img/icons/chevron-right.png' alt='logo'/></button>
                            </>
                        ):(
                            <button className={styles['sidebar-button-open']} onClick={handleToggleSidebar}>
                                <img src='../assets/img/icons/menu.png' alt='logo'/>
                            </button>
                            )
                        }
                    </div>
                <ul className={`${styles.menu}`}>
                    {!isHidden && 
                        <li className={`${styles['menu-item']}`}>
                            <p>COMMUNITY</p>
                        </li>
                    }
                    <li className={`${styles['menu-item']} ${activePage === 'Feed' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Feed')}>
                        <div className={styles.icon}>
                            <img src='../assets/img/icons/list.png' alt='icon'/>
                        </div>
                        {!isHidden && <p>Feed</p>}
                    </li>
                    <li className={`${styles['menu-item']} ${activePage === 'SendMessage' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('SendMessage')}>
                        <div className={styles.icon}>
                            <img src='../assets/img/icons/mail.png' alt='icon'/>
                        </div>
                        {!isHidden && <p>Send Message</p>}
                    </li>
                    <li className={`${styles['menu-item']} ${activePage === 'Discussions' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Discussions')}>
                        <div className={styles.icon}>
                            <img src='../assets/img/icons/speaker.png' alt='icon'/>
                        </div>
                        {!isHidden && <p>Discussions</p>}
                    </li>
                </ul>
                <ul className={`${styles.menu}`}>
                    {!isHidden &&
                        <li className={`${styles['menu-item']}`}>
                            <p>Settings</p>
                        </li>
                    }
                    <li className={`${styles['menu-item']} ${activePage === 'Manage' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Manage')}>
                        <div className={styles.icon}>
                            <img src='../assets/img/icons/bar-chart-4.png' alt='icon'/>
                        </div>
                        {!isHidden && <p>Manage</p>}
                    </li>
                    <li className={`${styles['menu-item']}`} onClick={()=>handleExit()}>
                        <div className={styles.icon}>
                            <img src='../assets/img/icons/log-out.png' alt='icon'/>
                        </div>
                        {!isHidden && <p>Log Out</p>}
                    </li>
                </ul>
            </div>
            ):(
                <div className={`${styles.sidebar} ${isHidden ? styles.hide : ''} `}>
                    <div>
                    {!isHidden ?(
                        <>
                            {/* <Link to='/' > */}
                            <div className={`${styles.logo} main-logo`}> 
                                <img  src='../assets/img/logo.png' alt='logo'/>
                            </div>
                            {/* </Link> */}
                            <button className={styles['sidebar-button-close']} onClick={handleToggleSidebar}><img src='../assets/img/icons/chevron-right.png' alt='logo'/></button>
                        </>
                    ):(
                        <button className={styles['sidebar-button-open']} onClick={handleToggleSidebar}>
                            <img src='../assets/img/icons/menu.png' alt='logo'/>
                        </button>
                        )
                    }
                        
                    </div>
                    <ul className={`${styles.menu}`}>
                        {!isHidden && 
                            <li className={`${styles['menu-item']}`}>
                                <p>COMMUNITY</p>
                            </li>
                        }
                        <li className={`${styles['menu-item']} ${activePage === 'Profile' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Profile')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/user.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Profile</p>}
                        </li>
                        <li className={`${styles['menu-item']} ${activePage === 'Notifications' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Notifications')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/bell.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Notifications</p>}
                        </li>
                        <li className={`${styles['menu-item']} ${activePage === 'Messages' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Messages')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/mail.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Messages</p>}
                        </li>
                    </ul>
                    <ul className={`${styles.menu}`}>
                        {!isHidden && 
                            <li className={`${styles['menu-item']}`}>
                            <p>LINKS</p>
                            </li>
                        }
                        <li className={`${styles['menu-item']} ${activePage === 'Blog' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Blog')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/clipboard-list.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Blog</p>}
                        </li>
                        <li className={`${styles['menu-item']} ${activePage === 'Services' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Services')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/list.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Services</p>}
                        </li>
                        <li className={`${styles['menu-item']} ${activePage === 'AffiliateProgram' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('AffiliateProgram')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/heart-handshake.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Affiliate Program</p>}
                        </li>
                    </ul>
                    <ul className={`${styles.menu}`}>
                        {!isHidden &&
                            <li className={`${styles['menu-item']}`}>
                                <p>Settings</p>
                            </li>
                        }
                        <li className={`${styles['menu-item']} ${activePage === 'Settings' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Settings')}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/settings.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Settings</p>}
                        </li>
                        <li className={`${styles['menu-item']}`} onClick={()=>handleExit()}>
                            <div className={styles.icon}>
                                <img src='../assets/img/icons/log-out.png' alt='icon'/>
                            </div>
                            {!isHidden && <p>Log Out</p>}
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Sidebar;