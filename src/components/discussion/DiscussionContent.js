import React, { useState } from 'react';
import styles from './index.module.css'

const DiscussionContent = ({content}) => {
 
    const handleNewDiscussion = () => {
       
    }
    return (
        <div className={styles['wrapper']}>
            <div className={styles.item}>
                <h3 className={`third-title ${styles.title}`}>All Discussions</h3>
                <button className={`button-primary ${styles['create-post-btn']}`} onClick={handleNewDiscussion}>New Discussion</button>
            </div>
            <div className={styles.item}>
                <img src={'../assets/img/project.png'} alt='project-avatar'/>
                <div>
                    <p className={styles.topic}>Start invetsrounds</p>
                    <p className={styles.desc}>SolarGrid replied 11 months, 1 week ago</p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={'../assets/img/project.png'} alt='project-avatar'/>
                <div>
                    <p className={styles.topic}>Next Airdrop</p>
                    <p className={styles.desc}>SolarGrid replied 11 months, 1 week ago</p>
                </div>
            </div>
        </div>
    );
};

export default DiscussionContent;
