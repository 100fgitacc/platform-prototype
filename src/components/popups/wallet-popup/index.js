import React from 'react';
import styles from './index.module.css';

const WalletPopup = () => {
    return(
        <div className={styles['popup-wrapper']}>
            <h2 className={`${styles.title} secondary-title`}>Connect Wallet</h2>
            <div className={styles.about}>
                <div className={styles['popup-item']}>
                    <img src={'../assets/img/icons/wallet4.png'} alt='WalletConnect'/>
                    <p>WalletConnect</p>
                </div>
                <div className={styles['popup-item']}>
                    <img src={'../assets/img/icons/wallet5.png'} alt='MetaMask'/>
                    <p>MetaMask</p>
                </div>
                <div className={styles['popup-item']}>
                    <img src={'../assets/img/icons/wallet6.png'} alt='Phantom'/>
                    <p>Phantom</p>
                </div>
            </div>
        </div>
    );
}

export default WalletPopup;