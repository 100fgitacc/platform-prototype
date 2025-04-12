import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const AuthFooter = () => {
    return(
        <footer className='auth-footer'>
          <Link to='/privacy' className={styles.terms}>Terms of Service and Privacy Policy</Link>
          <p className={styles.copyright}>© 2025- eternex.com</p>
        </footer>
    );
}

export default AuthFooter;