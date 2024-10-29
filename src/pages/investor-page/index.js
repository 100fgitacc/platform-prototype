import React, { useState } from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Profile from 'components/profile';
import { useSelector } from 'react-redux';

const InvestorPage = () => {
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);
    
    const [currPage, setCurrPage] = useState('Profile');

    const handleRenderPage = (page) => {
        setCurrPage(page);
    }
    const handleRenderContent = () => {
        switch (currPage) {
            case 'Profile':
                return <Profile currPage={currPage}/>;
            default:
                break;
        }
    }
   
    
    return(
        <div className='page-template'>
            <Sidebar renderPage={handleRenderPage} profileType={'investor'} currPage={currPage}/>
            <div className={`content ${isHidden ? styles['full-width'] : ''}`}>
                <Header/>
                <div className={`content-inner`}>
                    {handleRenderContent()}
                </div>
            </div>
        </div>
    );
}

export default InvestorPage;