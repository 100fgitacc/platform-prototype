import React, { useState } from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Profile from 'components/profile';
import Blog from 'components/blog';


const InvestorPage = () => {

    const [state, setState] = useState();

    const handleRenderPage = (page) => {
        setState(page);
    }
    const handleRenderContent = () => {
        switch (state) {
            case 'Profile':
                return <Profile/>;
            case 'Blog':
                return <Blog/>;
            default:
                return <Profile/>;
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