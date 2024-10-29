import React, { useRef, useEffect, useState } from 'react';
import Player from '@vimeo/player';
import styles from './index.module.css'
const CourseContent = ({content, data}) => {

    const playerRef = useRef(null);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        
        if (playerRef.current  && !player) {
            const newPlayer = new Player(playerRef.current, {
                id: 997309877,
                width: 800,
                height : 491,
                
            });
            setPlayer(newPlayer);
        }
        if (content !== 'Lesson') {
            setPlayer(null);
        }
    }, [player, content]);
    

    return (
        <div className={styles['content-container']}>
            {
            content === 'Lesson' ? (
                <div className={styles.player}>
                    <div ref={playerRef}></div>
                </div>
            ) : (
               <>
                 { data && data.length > 0 && (
                    data[0].content.map((content, index)=>{
                            return(
                                <div className={`${styles['overview-item']} ${styles['overview-item-link']}`} key={index}>  
                                    <p className={styles['overview-item-title']}> {content.title}</p>
                                </div>
                            )
                        })
                    )
                }
               </>
            )
            }
        </div>
    );
};

export default CourseContent;
