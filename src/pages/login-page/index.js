import React from 'react';
import styles from './index.module.css';
import LangSelector from 'components/lang-selector';
import AuthFooter from 'components/auth-footer';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return(
        <div className='auth-template'>
            <div className={`${styles['left-side']} left-side`}>
                <div className={styles.inner}>
                    <div className='auth-logo'>
                        <img src='../assets/img/logo.png' alt='logo'/>
                    </div>
                    <h1 className={`${styles.title} main-title`}>Where do <span>we start?</span></h1>
                    <div className={styles.image}>
                        <img src='../assets/img/franklin3.png' alt='franklin image'/>
                    </div>
                </div>
            </div>
            <div className={`${styles['right-side']} right-side`}>
                <div className={styles.inner}>
                    <LangSelector/>
                    <div className={styles.content}>
                        <div className={`${styles.card} auth-card `}>
                            <div className={styles.desc}>
                                <p>Download the project</p>
                                <Link to="/project">
                                    <button className='auth-btn'>Log In</button>
                                </Link>
                            </div>
                             <div className={styles.image}>
                                <img src='../assets/img/franklin2.png' alt='franklin image'/>
                            </div>
                        </div>
                        <div className={`${styles.card} auth-card `}>
                            <div className={styles.desc}>
                                <p>Become an investor</p>
                                <Link to="/investor">
                                    <button className='auth-btn'>Log In</button>
                                </Link>
                            </div>
                             <div className={styles.image}>
                                <img src='../assets/img/franklin1.png' alt='franklin image'/>
                            </div>
                        </div>
                    </div>
                    <AuthFooter/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;