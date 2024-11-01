import React, { useState } from 'react';
import styles from './index.module.css';

const ActivityPopup = () => {

    const [activity, setActivity] = useState('');

    const handleSelectActivity = (activity) => {
        setActivity(activity);
    }    


    return(
        <div className={`${styles['popup-wrapper']} ${activity ? styles['reset-wrapper'] : ''}`}>
            {activity === 'Airdrop' ? (
                <>
                    <h2 className={`${styles.title} secondary-title`}>Airdrop</h2>
                    <div className={`${styles['popup-item']}`}>
                        <div>
                            <img src='../assets/img/galxe.png' alt='galxe'/>
                        </div>
                        <div>
                            <label className={`${styles['input-wrapper']}`}>
                                Paste the link to the event on Galxe
                                <input type='text' placeholder='https://'/> 
                            </label>
                            <div className={`${styles['input-wrapper']} checkbox-container`}>
                                <input type="checkbox" id="customCheckbox" className="custom-checkbox" checked/>
                                <label for="customCheckbox">Project added</label>
                            </div>
                            <button className={`button-primary ${styles['submit-btn']}`}>Submit for moderation</button>
                        </div>
                    </div>
                    <div className={`${styles['popup-item']}`}>
                        <div>
                            <img src='../assets/img/Quiz.png' alt='Quiz'/>
                        </div>
                        <div>
                            <label className={`${styles['input-wrapper']}`}>
                                Paste the link to the event on Layer3
                                <input type='text' placeholder='https://'/> 
                            </label>
                            <div className={`${styles['input-wrapper']} checkbox-container`}>
                                <input type="checkbox" id="customCheckbox" className="custom-checkbox" />
                                <label for="customCheckbox">Project added</label>
                            </div>
                            <button className={`button-primary ${styles['submit-btn']} ${styles['not-active']} `}>Submit for moderation</button>
                        </div>
                    </div>
                </>
            ): activity === 'Investround' ? (
                <>
                    <h2 className={`${styles.title} secondary-title`}>Investround</h2>
                    <div className={`${styles['popup-item']} ${styles['invest-window']}`}>
                        <h3 className={`${styles.title} third-title`}>Participate in Round</h3>
                        <div>
                            <label className={`${styles['input-wrapper']}`}>
                                Open till
                                <input type='text' placeholder='24.10.24'/> 
                            </label>
                            <label className={`${styles['input-wrapper']}`}>
                                Total Allocation ($USDT)
                                <input type='text' placeholder='0 USDT'/> 
                            </label>
                            <label className={`${styles['input-wrapper']}`}>
                                Total Allocation (TOKEN)
                                <input type='text' placeholder='TOKEN'/> 
                            </label>
                        </div>
                        <div>
                            <label className={`${styles['input-wrapper']}`}>
                                Min deposit
                                <input type='text' placeholder='0 USDT'/> 
                            </label>
                            <label className={`${styles['input-wrapper']}`}>
                                Max deposit
                                <input type='text' placeholder='0 USDT'/> 
                            </label>
                        </div>
                            <p>Result: <strong>0,0 USDT</strong></p>
                        <div>
                            <button className={`button-primary ${styles['submit-btn']}`}>Submit for moderation</button>
                        </div>
                       
                    </div>
                </>
            ): (
                <>
                    <h2 className={`${styles.title} secondary-title`}>Select an activity</h2>
                    <div className={`${styles['popup-item']} ${styles.airdrop}`} onClick={()=>handleSelectActivity('Airdrop')}>
                        <strong>Airdrop</strong>
                    </div>
                    <div className={`${styles['popup-item']} ${styles.investround}`} onClick={()=>handleSelectActivity('Investround')}>
                        <strong>Investround</strong>
                    </div>
                </>
            )}
        </div>
    );
}

export default ActivityPopup;