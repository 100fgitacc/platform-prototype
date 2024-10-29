import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Profile from 'components/profile';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentHeader from 'components/content-header';
import PagePagination from 'components/page-pagination';
import FeedContent from 'components/feed/FeedContent';
import { course } from 'database/investor/courses';
const InvestorPageProject = () => {
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);
    const activePage = useSelector((state) => state.explore.activeMenuItem);
    
    const [currPage, setCurrPage] = useState('Profile');
    
    const handleRenderPage = (page) => {
        setCurrPage(page);
    }

    const [content, setContent] = useState('Feed');
    const handleSetContent = (e) => {
        setContent(e);
    }
    const handleRenderContent = () => {
        switch (currPage) {
            case 'Profile':
                return <Profile currPage={currPage}/>;
            case 'investor-project':
                return  <>
                            <ContentHeader  page={content}/>
                            <PagePagination content={content} currPage={currPage} renderPageContent={handleSetContent}/>
                            <FeedContent content={content} changeContent={handleSetContent}/>
                        </>;
            default:
                break;
        }
    }
   
    
  

  
    return(
        <div className='page-template'>
            <Sidebar renderPage={handleRenderPage} profileType={'investor'} />
            <div className={`content ${isHidden ? styles['full-width'] : ''}`}>
                <Header />
                <div className={`content-inner`}>
                    {handleRenderContent()}
                </div>
            </div>
          
           
        </div>
    );
}

export default InvestorPageProject;