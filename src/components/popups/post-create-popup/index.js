import React, { useState } from 'react';
import styles from './index.module.css';
import MembersSelector from 'components/members-selector';

const PostPopup = ({feeds}) => {

    const [newComment, setNewComment] = useState('');
    const handleCommentChange = (index, value) => {
        setNewComment(prevComments => {
            const updatedComment = [...prevComments];
            updatedComment[index] = value;
            return updatedComment;
        });
    };
    const handleCreatePost = () => {
       
    }

    return(
        <div className={styles['popup-wrapper']}>
            <h2 className={`${styles.title} secondary-title`}>Create a post</h2>
            <div className={styles.about}>
                <div className={styles['popup-item']}>
                    <img src={'../assets/img/project.png'} alt='project-avatar'/>
                    <div>
                        <p className={styles.author}>SolarGrid</p>
                        <MembersSelector/>
                    </div>
                </div>
                <div className={styles['popup-item']}>
                    <textarea
                    className={styles.textarea}
                    value={newComment}
                    onChange={(e)=>handleCommentChange(e.target.value)}
                    placeholder='Share something with project'
                    />
                </div>
                <div className={styles['popup-item']}>
                    <div className={styles['post-tools']}>
                        <div className={styles['post-tools-item']}>
                            <img src={'../assets/img/icons/camera.png'} alt='icon'/>
                        </div> 
                        <div className={styles['post-tools-item']}>
                            <img src={'../assets/img/icons/smile.png'} alt='icon'/>
                        </div> 
                    </div> 
                    <button className={`button-primary ${styles['create-post-btn']}`} onClick={handleCreatePost}>Create post</button>
                </div>
            </div>
        </div>
    );
}

export default PostPopup;