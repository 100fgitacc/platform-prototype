import React, { useState } from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Profile from 'components/profile';
import Blog from 'components/blog';


const InvestorPage = () => {

    const [currPage, setCurrPage] = useState('Profile');

    const handleRenderPage = (page) => {
        setCurrPage(page);
    }
    const handleRenderContent = () => {
        switch (currPage) {
            case 'Profile':
                return <Profile currPage={currPage}/>;
            // case 'Blog':
            //     return <Blog currPage={currPage}/>;
            default:
                return <Profile currPage={currPage}/>;
        }
    }
    return(
        <div className='page-template'>
            <Sidebar renderPage={handleRenderPage}/>
            <div className='content'>
                <Header/>
                <div className='content-inner'>
                    {handleRenderContent()}
                </div>
            </div>
        </div>
    );
}

export default InvestorPage;