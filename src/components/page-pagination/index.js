import React, { useState} from 'react';
import styles from './index.module.css';

const PagePagination = ({currPage, renderPageContent}) => {

    const [activePage, setActivePage] = useState('Account');
    const handleMenuItemClick = (e) => {
        setActivePage(e);
        renderPageContent(e);
    }

    return(
        <>
            {
                currPage === 'Profile' ? (
                    <ul className={styles.wrapper}>
                    <li className={`${styles['pagination-item']} ${activePage === 'Account' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Account')}>
                        <p>Account</p>
                    </li>
                    <li className={`${styles['pagination-item']} ${activePage === 'Courses' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Courses')}>
                        <p>Courses</p>
                    </li>
                    <li className={`${styles['pagination-item']} ${activePage === 'Projects' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Projects')}>
                        <p>Projects</p>
                    </li>
                    <li className={`${styles['pagination-item']} ${activePage === 'Myfeed' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Myfeed')}>
                        <p>My feed</p>
                    </li>
                    <li className={`${styles['pagination-item']} ${activePage === 'Wallets' ? styles.active : '' }`} onClick={()=>handleMenuItemClick('Wallets')}>
                        <p>Wallets</p>
                    </li>
                </ul>
                ) : null
            }
        </>
    );
}

export default PagePagination;