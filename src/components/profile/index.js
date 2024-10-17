import React, { useState } from 'react';
import ContentHeader from 'components/content-header';
import PagePagination from 'components/page-pagination';
import ProfileContent from './ProfileContent';

const Profile = ({currPage}) => {

    const [content, setContent] = useState('Account');

    const handleSetContent = (e) => {
        setContent(e);
    }

    return (
        <>
            <ContentHeader/>
            <PagePagination currPage={currPage} renderPageContent={handleSetContent}/>
            <ProfileContent content={content}/>
        </>
    );
};

export default Profile;
