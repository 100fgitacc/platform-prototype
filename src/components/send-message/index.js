import React, { useState } from 'react';
import ContentHeader from 'components/content-header';
import SendMessageContent from './SendMessageContent';
import { course } from 'database/investor/courses';
const SendMessage = ({ currPage }) => {

    const [content, setContent] = useState('SendMessage');
    
    const handleSetContent = (e) => {
        setContent(e);
    }
  
    
    return (
        <>
            <ContentHeader  page={content} content={course[0]}/>
            <SendMessageContent content={content}/>
        </>
    );
};

export default SendMessage;
