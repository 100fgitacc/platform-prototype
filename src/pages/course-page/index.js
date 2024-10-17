import React from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Course from 'components/course';
const CoursePage = () => {
    return(
        <div className='page-template'>
            <Sidebar/>
            <div className='content'>
                <Header/>
                <div className='content-inner'>
                   <Course/>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;