import React, { useState } from 'react';
import styles from './index.module.css'
import MembersSelector from 'components/members-selector';

const SendMessageContent = ({content}) => {
   
    const [newComment, setNewComment] = useState('');
    const handleCommentChange = (index, value) => {
        setNewComment(prevComments => {
            const updatedComment = [...prevComments];
            updatedComment[index] = value;
            return updatedComment;
        });
    };
    const handleSendMessage = () => {
       
    }
    return (
        <div className={styles['wrapper']}>
            <div className={styles['item']}>
                <p className={styles.title}>Send to</p>
                <MembersSelector/>
            </div>
            <div className={styles['item']}>
                <textarea
                className={styles.textarea}
                value={newComment}
                onChange={(e)=>handleCommentChange(e.target.value)}
                placeholder='Share something with project'
                />
            </div>
            <div className={styles['item']}>
                <div className={styles['post-tools']}>
                    <div className={styles['post-tools-item']}>
                        <img src={'../assets/img/icons/text-cursor.png'} alt='icon'/>
                    </div> 
                    <div className={styles['post-tools-item']}>
                        <img src={'../assets/img/icons/camera.png'} alt='icon'/>
                    </div> 
                    <div className={styles['post-tools-item']}>
                        <img src={'../assets/img/icons/smile.png'} alt='icon'/>
                    </div> 
                </div> 
                <button className={`button-primary ${styles['create-post-btn']}`} onClick={handleSendMessage}>Send Message</button>
            </div>
        </div>
    );
};

export default SendMessageContent;
