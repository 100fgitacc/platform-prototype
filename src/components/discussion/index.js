import React, { useState } from 'react';
import ContentHeader from 'components/content-header';
import DiscussionContent from './DiscussionContent';
import { course } from 'database/investor/courses';
const Discussion = ({ currPage }) => {

    const [content, setContent] = useState('Discussions');
    
    const handleSetContent = (e) => {
        setContent(e);
    }
  
        
    return (
        <>
            <ContentHeader  page={content} content={course[0]}/>
            <DiscussionContent content={content}/>
        </>
    );
};

export default Discussion;
