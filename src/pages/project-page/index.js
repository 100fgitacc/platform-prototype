import React from 'react';
import styles from './index.module.css';
import Sidebar from 'components/sidebar';
import Header from 'components/header';

const ProjectPage = () => {
    return(
        <div className='page-template'>
            {/* <Sidebar/> */}
            <div className='content'>
                {/* <Header/> */}
                <div className={styles['']}></div>
            </div>
        </div>
    );
}

export default ProjectPage;