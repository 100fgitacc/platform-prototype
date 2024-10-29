import React, { useState } from 'react';
import styles from './index.module.css';
import ContentHeader from 'components/content-header';
import CourseOverview from './CourseOverview';
import { course } from 'database/investor/courses';
import { useSelector } from 'react-redux';
import PagePagination from 'components/page-pagination';
import CourseContent from './CourseContent';

const Course = () => {

    const isExploreCourse = useSelector((state) => state.explore.setExploreCourse);
    const [content, setContent] = useState('Lesson');

    const handleSetContent = (e) => {
        setContent(e);
    } 
    return(
        <>
            
            {!isExploreCourse? (
                <>
                    <ContentHeader page={'course'} content={course[0] }/>
                    <h2 className={`${styles.title} secondary-title`}>Course content</h2>
                    <CourseOverview data={course[0]}/>
                </>
            ):(
                <>
                    <div>
                        <CourseOverview data={course[0]}/>
                    </div>
                    <div>
                        <ContentHeader page={'course-succesed'} content={course[0] } />
                        <PagePagination currPage={'single-course'} renderPageContent={handleSetContent}/>
                        <CourseContent content={content} data={course[0].overview}/>
                    </div>
                    
                </>
            )}
            
        </>
        
    );
}

export default Course;