import React from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Course from 'components/course';
import { useSelector } from 'react-redux';

const CoursePage = () => {

    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);

    const handlePageRender = (e) => {
        console.log(e);
        
    }
    return(
        <div className={`page-template`}>
            <Sidebar renderPage={handlePageRender}/>
            <div className={`content ${isExploreCourse && styles['lesson-content']} ${!isExploreCourse && isHidden? 'full-width': ''} `}>
                <Header/>
                <div 
                className={`content-inner ${isExploreCourse ? styles['lesson-content-inner']  : ''} 
                ${isExploreCourse && !isHidden  && styles['lesson-content-inner-full']}
                `}>

                   <Course/>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;