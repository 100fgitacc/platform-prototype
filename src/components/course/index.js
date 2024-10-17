import React, { useState } from 'react';
import styles from './index.module.css';
import ContentHeader from 'components/content-header';
import CourseOverview from './CourseOverview';
import { course } from 'database/investor/courses';
import { useSelector } from 'react-redux';

const Course = () => {

    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);
    
    return(
        <>
            
            {!isExploreCourse? (
                <>
                    <ContentHeader page={'course'} content={course[0] }/>
                    <h2 className={`${styles.title} secondary-title`}>Course content</h2>
                    <CourseOverview data={course[0].overview}/>
                </>
            ):(
                <>
                   <ContentHeader page={'course-succesed'} content={course[0] } />
                </>
            )}
            
        </>
        
    );
}

export default Course;