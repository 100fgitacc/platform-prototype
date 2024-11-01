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
    
    const youtubeUrl = "https://www.youtube.com/embed/IyIS2XLjzJg";

    return (
        <div className={styles['content-container']}>
            {
            content === 'Lesson' ? (
                <iframe
                className={styles.player}
                src={youtubeUrl}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
            ></iframe>
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
