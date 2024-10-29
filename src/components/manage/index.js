import React, { useState } from 'react';
import ContentHeader from 'components/content-header';
import PagePagination from 'components/page-pagination';
import ManageContent from './ManageContent';
const Manage = ({ currPage,context }) => {
    
    const [content, setContent] = useState(context !== ''? context: 'Details');
    
    const handleSetContent = (e) => {
        setContent(e);
    }
  
    
    return (
        <>
            <ContentHeader  page={content}/>
            <PagePagination currPage={currPage} renderPageContent={handleSetContent}/>
            <ManageContent content={content} />
        </>
    );
};

export default Manage;
