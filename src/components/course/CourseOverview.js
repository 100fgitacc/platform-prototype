import React, { useState } from 'react';
import styles from './index.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { resetExplore } from '../../store';
import ProgressBar from 'components/progress-bar';

const CourseOverview  = ({data}) => {

    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);
    const [visibleItems, setVisibleItems] = useState({});

    const handleTextOpened = (elemIndex, index) =>{
        
        const key = `${elemIndex}-${index}`;
        if (visibleItems[key]) {
            setVisibleItems(prev => ({ ...prev, [key]: false }));
        } else {
            setVisibleItems(prev => ({ ...prev, [key]: true }));
        }
    }
    const dispatch = useDispatch();

    const handleExploreClick = () => {
        dispatch(resetExplore());
        
    };
    
    return(
        <div className={`${styles['overview-wrapper']} ${isExploreCourse && styles['single-course']}`}>
            {isExploreCourse && (
                        <>
                            <button className={styles['back-to-button']} onClick={handleExploreClick}>Back to course</button>
                            <div className={`${styles['header-image'] }`}>
                                <h1 className={`${styles.title} main-title`}>{data.name}</h1>
                            </div>
                            <div className={styles['header-info']}>
                                <div className={styles.desc}>
                                    <ProgressBar progress={data.progress}/>
                                </div>
                                <div className={styles.activity}>
                                    <img src='../assets/img/icons/timer.png' alt='timer icon'/>
                                    <p>Last activity: 04.10.24</p>
                                </div>
                            </div>
                        </>
                    )}
            {data &&  (
                data.overview.map((item, elemIndex)=>(
                    <div className={styles['overview-inner']} key={elemIndex}>  
                        <p className={styles['overview-heading']}>  
                            {item.heading}
                        </p>
                        {
                            item.content.map((content, index)=>{
                                const key = `${elemIndex}-${index}`;
                                return(
                                    <div className={styles['overview-item']} key={index} onClick={()=>handleTextOpened(elemIndex,index)}>  
                                        <p className={styles['overview-item-title']}> {content.title}</p>
                                        <AnimatePresence>
                                            {visibleItems[key] && (
                                                <motion.p
                                                    className={styles['overview-item-text']}
                                                    initial={{ opacity: 0, height: 0, marginTop:0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginTop:10  }}
                                                    exit={{ opacity: 0, height: 0, marginTop:0  }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {content.text}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })
                        }
                        
                       
                    </div>
                ))
            )}
           
            
        </div>
        
    );
}

export default CourseOverview;