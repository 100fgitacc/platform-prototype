import React, { useState } from 'react';
import styles from './index.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const CourseOverview  = ({data}) => {

        const [visibleItems, setVisibleItems] = useState({});

        const handleTextOpened = (elemIndex, index) =>{
            
            const key = `${elemIndex}-${index}`;
            if (visibleItems[key]) {
                setVisibleItems(prev => ({ ...prev, [key]: false }));
            } else {
                setVisibleItems(prev => ({ ...prev, [key]: true }));
            }
        }

    return(
        <div className={styles['overview-wrapper']}>
            {data &&  (
                data.map((item, elemIndex)=>(
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