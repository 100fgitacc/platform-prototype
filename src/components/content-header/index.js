// NotFoundPage.js
import React, { useState } from 'react';
import styles from './index.module.css';
import ProgressBar from 'components/progress-bar';
import { showToast } from '../toast-сonfig';
import { useDispatch } from 'react-redux';
import { setExplore } from '../../store';

const ContentHeader = ({ page, content}) => {

    
    const [coursesState, setCoursesState] = useState(content.isStarted);

    const handleCourseSubmit = (index) =>{
        setCoursesState(prevCourses => ({
            ...prevCourses,
            isStarted: true 
        }))
        showToast(`You are was submited to course "${content.name}"`);
    }
    const dispatch = useDispatch();

    const handleExploreClick = () => {
        dispatch(setExplore());
    };

    return (
        <>
        {
                page === 'course' ? (
                    <div className={`${styles.wrapper} ${styles.course}`}>
                        <div className={`${styles['header-image'] }`}>
                            <h1 className={`${styles.title} main-title`}>{content.name}</h1>
                            <p className={`${styles.subtitle}`}>{content.desc}</p>
                        </div>
                        <div className={styles['header-info']}>
                            <div className={styles.desc}>
                                <ProgressBar progress={content.progress}/>
                            </div>
                            <div className={styles.activity}>
                                <img src='../assets/img/icons/timer.png' alt='timer icon'/>
                                <p>Last activity: 04.10.24</p>
                            </div>
                        </div>
                        <div className={styles['course-info']}>
                            <div>
                                <p>{content.membersCount} members</p>
                                <p>{content.price !== 0 ? content.price : 'Free'}</p>
                            </div>

                            {coursesState.isStarted ? (
                                    <button className={`${styles['start-course-success']} button-success`} onClick={()=>handleExploreClick()}>Explore the course!</button>
                                ):(
                                    <button className={`${styles['start-course']} button-primary`} onClick={()=>handleCourseSubmit(0)}>Start course</button>
                                )}
                            <h3 className={styles['third-title']}>Course includes</h3>
                            <div>
                                <img src='../assets/img/icons/book.png' alt='book icon'/>
                                <p>{content.lessonsCount} lessons</p>
                            </div>
                        </div>
                    </div>
                ) :  (
                    <div className={`${styles.wrapper} ${styles.profile}`}>
                        <div className={`${styles['header-image'] }`}></div>
                        <div className={styles['header-info']}>
                            <div className={styles.avatar}>
                                <img src='../assets/img/account-ava.png' alt='avatar'/>
                            </div>
                            <div className={styles.desc}>
                                <h2 className={`${styles.title} secondary-title`}>James Smith</h2>
                                <div>
                                    <div className={styles['sub-info']}>
                                        <p className={styles.role}>@investor</p>
                                        <p className={styles.date}>11.05.1988</p>
                                        <div className={styles.country}>
                                            <img src='../assets/img/icons/usa.png' alt='usa icon'/>
                                            <p>USA</p>
                                        </div>
                                        <p className={styles.status}>Active now</p>
                                    </div>
                                
                                    <div className={styles.rate}>
                                        <div className={styles.name}>
                                            <img src='../assets/img/icons/moon.png' alt='moon icon'/>
                                            <p>Moon</p>
                                        </div>
                                        <p className={styles.count}>#1</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ContentHeader;
