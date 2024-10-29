import React, { useState } from 'react';
import ContentHeader from 'components/content-header';
import PagePagination from 'components/page-pagination';
import FeedContent from './FeedContent';
import { course } from 'database/investor/courses';
import {useDispatch } from 'react-redux';
import {setIsDashboard, setActiveMenuItem } from '../../store';
const Feed = ({ currPage }) => {

    const [content, setContent] = useState('Feed');
    const dispatch = useDispatch();
    
    const handleSetContent = (page) => {
        if (page === 'Manage') {
            dispatch(setActiveMenuItem(page));
            dispatch(setIsDashboard(true));
        }
    }
    
    return (
        <>
            <ContentHeader  page={content} content={course[0]}/>
            <PagePagination content={content} currPage={currPage} renderPageContent={handleSetContent}/>
            <FeedContent content={content} changeContent={handleSetContent}/>
        </>
    );
};

export default Feed;
