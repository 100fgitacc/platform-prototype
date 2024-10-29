import React, { useState } from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import { useSelector } from 'react-redux';
import Feed from 'components/feed';
import SendMessage from 'components/send-message';
import Discussion from 'components/discussion';
import Manage from 'components/manage';
const ProjectPage = () => {
    const isHidden = useSelector((state) => state.explore.isSidebarHidden);
    const [currPage, setCurrPage] = useState('Feed');
    const [context, setContext] = useState('');
    const isDashboard = useSelector((state) => state.explore.isDashboard);
    const handleRenderPage = (page) => {
        if (isDashboard) {
            setContext('Dashboards'); 
        }
        setCurrPage(page);
       
      
    }
    
    const handleRenderContent = () => {
        switch (currPage) {
            case 'Feed':
                return <Feed currPage={currPage}/>;
            case 'SendMessage':
                return <SendMessage currPage={currPage}/>;
            case 'Discussions':
                return <Discussion currPage={currPage}/>;
            case 'Manage':
                return <Manage currPage={currPage} context={context}/>;
            default:
                break
        }
    }
    
    return(
        <div className='page-template'>
            <Sidebar renderPage={handleRenderPage} profileType={'project'} currPage={currPage}/>
            <div className={`content ${isHidden ? styles['full-width'] : ''}`}>
                <Header profileType={'project'}/>
                <div className='content-inner'>
                    {handleRenderContent()}
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;