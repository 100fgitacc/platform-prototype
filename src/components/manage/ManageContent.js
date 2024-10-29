import React, { useState } from 'react';
import styles from './index.module.css'
import DoughnutChart from 'components/data-visualization-ui/DoughnutChart';
import ProgressChart from 'components/data-visualization-ui/ProgressChart';
import LineChart from 'components/data-visualization-ui/LineChart';
import BarChart from 'components/data-visualization-ui/BarChart';
import PagePagination from 'components/page-pagination';
import Calculator from 'components/calculator';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ActivityPopup from 'components/popups/activity-popup';
const MySwal = withReactContent(Swal);

const ManageContent = ({content}) => {
   
    const [selectedOption, setSelectedOption] = useState({
        privacy:'public',
        project:'оrganizers',
        activity:'оrganizers',
        messages:'allProject'
    });

    const handleRadioData = (value, name) => {
        
        setSelectedOption(prevState => ({
            ...prevState,
            [name]:value
        }))

    };
      
    const [options, setOptions] = useState('Table');
    const [subOption, setSubOptions] = useState('Times');

    const handleSetOptions = (option) =>{
        if (option) {
            setOptions(option); 
        }

    }
    const handleSetSubOptions = (option) =>{
        if (option) {
            setSubOptions(option); 
        }

    }
    const renderSubPage = () =>{
        switch (options) {
            case 'Table':
                return (
                    <div className={`${styles['content-wrapper']} ${styles.audience}`}>
                        <div>
                            <h2 className={`${styles['participate-title']} secondary-title`}>Audience</h2>
                            <p>345</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Registration times</th>
                                    <th>Wallet</th>
                                    <th>Gitcoin Passport</th>
                                    <th>KYC</th>
                                    <th>Invested projects</th>
                                    <th>Completed projects</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>James Smith</td>
                                    <td>45</td>
                                    <td>$125'450</td>
                                    <td>30</td>
                                    <td>480</td>
                                    <td>130</td>
                                    <td>144</td>
                                    <td>Moon</td>
                                </tr>
                                <tr>
                                    <td>Ethan Campbell</td>
                                    <td>65</td>
                                    <td>$1'255'450</td>
                                    <td>22</td>
                                    <td>440</td>
                                    <td>110</td>
                                    <td>150</td>
                                    <td>Star</td>
                                </tr>
                                <tr>
                                    <td>Ava Roberts</td>
                                    <td>34</td>
                                    <td>$185'400</td>
                                    <td>20</td>
                                    <td>490</td>
                                    <td>124</td>
                                    <td>112</td>
                                    <td>Rock</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            case 'Chart':
                return (
                    <div className={`${styles['content-wrapper']} ${styles.audience}`}>
                       <PagePagination context={`audience-subOptions`} options={options} renderSubOptionsContent={handleSetSubOptions}/>
                       {subOption === 'Times' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Registration times</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):subOption === 'Wallet' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Wallet</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):subOption === 'Passport' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Gitcoin Passport</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):subOption === 'KYC' ? (
                            <> 
                                <div>
                                    <h2 className={`${styles['participate-title']} secondary-title`}>KYC</h2>
                                    <p>345</p>
                                </div>
                                <div className={styles['doughnut']}>
                                    <DoughnutChart/>
                                </div>
                               
                            </>
                        ):subOption === 'Invested' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Invested projects</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):subOption === 'Completed' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Completed projects</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):subOption === 'Airdrop' ? (
                            <> 
                            <div>
                                <h2 className={`${styles['participate-title']} secondary-title`}>Airdrop points</h2>
                                <p>345</p>
                            </div>
                                <BarChart/>
                            </>
                        ):null
                       }
                    </div>
                );
        
            default:
                break;
        }
    }

    const handleSelectActivity = () =>{
        MySwal.fire({
            showCloseButton: true, 
            showConfirmButton: false, 
            backdrop: true, 
            html: <ActivityPopup/>,  
            customClass: {
                popup: 'activity-popup-inner'
            },
            backdrop: `
                rgba(0, 0, 0, 0.8) 
            `,
        });
    }


    return (
        <div className={styles['content-container']}>
            {
            content === 'Details' ? (
                <>
                    <div className={`${styles['content-wrapper']} ${styles.details}`}>
                        <div className={styles['content-elem']}>
                            <p>Project name</p> 
                            <input type='text' placeholder='|SolarGrid'/> 
                        </div>     
                        <div className={styles['content-elem']}>
                            <p>Project description</p>  
                            <textarea
                            className={styles.textarea}
                            // value={newComment}
                            // onChange={(e)=>handleCommentChange(index, e.target.value)}
                            placeholder='Project description'
                            />
                        </div>   
                    </div>
                    <button className={`button-primary ${styles['save-changes-btn']}`}>Save Changes</button>
                </>
            ) : content === 'Settings' ? (
                <>
               
                    <div className={`${styles['content-wrapper']} ${styles.settings}`}>
                        <div className={styles['content-elem']}>
                            <h3 className={`third-title ${styles.title}`}>Your avatar</h3>
                            <button className={`button-primary ${styles['upload-btn']}`}>Upload file</button>
                        </div>
                        <div className={styles['content-elem']}>
                            <h3 className={`third-title ${styles.title}`}>Your background</h3>
                            <button className={`button-primary ${styles['upload-btn']}`}>Upload file</button>
                        </div>
                    </div>
                    <div className={`${styles['content-wrapper']} ${styles.settings}`}> 
                        <h2 className={`secondary-title ${styles.title}`}>Privacy options</h2>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="public"
                                checked={selectedOption.privacy === 'public'}
                                onChange={(e) => handleRadioData(e.target.value, 'privacy')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                This is a public project
                            </label>
                            <ul className={`${styles['options-desc']}`}> 
                                <li className={`${styles['options-desc-item']}`}> 
                                    Any site member cain join this project.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                This project will be listed in the projects directory and in search results.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                Project content and activity will be visible to any site member.
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="private"
                                checked={selectedOption.privacy === 'private'}
                                onChange={(e) => handleRadioData(e.target.value, 'privacy')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                This is a private project
                            </label>
                            <ul className={`${styles['options-desc']}`}> 
                                <li className={`${styles['options-desc-item']}`}> 
                                    Any site member cain join this project.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                This project will be listed in the projects directory and in search results.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                Project content and activity will be visible to any site member.
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="hidden"
                                checked={selectedOption.privacy === 'hidden'}
                                onChange={(e) => handleRadioData(e.target.value, 'privacy')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                This is a hidden project
                            </label>
                            <ul className={`${styles['options-desc']}`}> 
                                <li className={`${styles['options-desc-item']}`}> 
                                    Any site member cain join this project.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                This project will be listed in the projects directory and in search results.
                                </li>
                                <li className={`${styles['options-desc-item']}`}> 
                                Project content and activity will be visible to any site member.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles['content-wrapper']} ${styles.settings}`}> 
                        <h2 className={`secondary-title ${styles.title}`}>Project Invitations</h2>
                        <p className={styles.note}>Which member of this project are allowed to invite others?</p>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="allProject"
                                checked={selectedOption.project === 'allProject'}
                                onChange={(e) => handleRadioData(e.target.value, 'project')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                All project members
                            </label>
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="organizersAndModerations"
                                checked={selectedOption.project === 'organizersAndModerations'}
                                onChange={(e) => handleRadioData(e.target.value, 'project')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers and Moderations only
                            </label>
                           
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="оrganizers"
                                checked={selectedOption.project === 'оrganizers'}
                                onChange={(e) => handleRadioData(e.target.value, 'project')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers only
                            </label>
                        </div>
                    </div>
                    <div className={`${styles['content-wrapper']} ${styles.settings}`}> 
                        <h2 className={`secondary-title ${styles.title}`}>Activity Feeds</h2>
                        <p className={styles.note}>Which member of this project are allowed to post into the activity feed?</p>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="allProject"
                                checked={selectedOption.activity === 'allProject'}
                                onChange={(e) => handleRadioData(e.target.value, 'activity')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                All project members
                            </label>
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="organizersAndModerations"
                                checked={selectedOption.activity === 'organizersAndModerations'}
                                onChange={(e) => handleRadioData(e.target.value, 'activity')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers and Moderations only
                            </label>
                           
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="оrganizers"
                                checked={selectedOption.activity === 'оrganizers'}
                                onChange={(e) => handleRadioData(e.target.value, 'activity')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers only
                            </label>
                        </div>
                    </div>
                    <div className={`${styles['content-wrapper']} ${styles.settings}`}> 
                        <h2 className={`secondary-title ${styles.title}`}>Project Messages</h2>
                        <p className={styles.note}>Which member of this project are allowed to send project messages?</p>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="allProject"
                                checked={selectedOption.messages === 'allProject'}
                                onChange={(e) => handleRadioData(e.target.value, 'messages')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                All project members
                            </label>
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="organizersAndModerations"
                                checked={selectedOption.messages === 'organizersAndModerations'}
                                onChange={(e) => handleRadioData(e.target.value, 'messages')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers and Moderations only
                            </label>
                           
                        </div>
                        <div className={`${styles['options-wrapper']}`}>
                            <label className="radio-container">
                                <input
                                type="radio"
                                value="оrganizers"
                                checked={selectedOption.messages === 'оrganizers'}
                                onChange={(e) => handleRadioData(e.target.value, 'messages')}
                                className="radio"
                                />
                                <span className="custom-radio"></span>
                                Organizers only
                            </label>
                        </div>
                    </div>
                    <button className={`button-primary ${styles['save-changes-btn']}`}>Save Changes</button>
                </>
            ) : content === 'Dashboards' ? (
                <>
                    <div className={`${styles['content-wrapper']} ${styles.dashboards}`}>
                        <div>
                            <h3 className={`${styles['participate-title']} third-title`}>Investment round participant</h3>
                            <p>See all</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Registration times</th>
                                    <th>Wallet</th>
                                    <th>Gitcoin Passport</th>
                                    <th>KYC</th>
                                    <th>Invested projects</th>
                                    <th>Completed projects</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>James Smith</td>
                                    <td>45</td>
                                    <td>$125'450</td>
                                    <td>30</td>
                                    <td>480</td>
                                    <td>130</td>
                                    <td>144</td>
                                    <td>Moon</td>
                                </tr>
                                <tr>
                                    <td>Ethan Campbell</td>
                                    <td>65</td>
                                    <td>$1'255'450</td>
                                    <td>22</td>
                                    <td>440</td>
                                    <td>110</td>
                                    <td>150</td>
                                    <td>Star</td>
                                </tr>
                                <tr>
                                    <td>Ava Roberts</td>
                                    <td>34</td>
                                    <td>$185'400</td>
                                    <td>20</td>
                                    <td>490</td>
                                    <td>124</td>
                                    <td>112</td>
                                    <td>Rock</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles['charts-container']}>
                        <div className={styles['charts-item']}>
                            <h3 className={`${styles['participate-title']} third-title`}>Investor allocation volume</h3>
                            <DoughnutChart/>
                        </div>
                        <div className={styles['item-wrapper']}>
                            <div className={styles['charts-item']}>
                                <h3 className={`${styles['participate-title']} third-title`}>Staking</h3>
                                <ProgressChart progress={80}/>
                                <h3 className={`${styles['participate-title']} third-title`}>Farming</h3>
                                <ProgressChart progress={10}/>
                            </div>
                            <div className={styles['charts-item']}>
                                <h3 className={`${styles['participate-title']} third-title`}>Activities</h3>
                                <LineChart/>
                            </div>
                        </div>
                        <div className={`${styles['charts-item']} ${styles['last-item']}`}>
                        <h3 className={`${styles['participate-title']} third-title`}>Project points</h3>
                            <BarChart/>
                        </div>
                    </div>
                </>
            ) : content === 'Audience' ? (
                <>
                    <div className={`${styles['content-wrapper']} ${styles.audience}`}>
                        <h3 className={`${styles['participate-title']} third-title`}>Audience calculator</h3>
                        <Calculator/>
                    </div>
                    <PagePagination context={`audience-options`} options={options} renderOptionsContent={handleSetOptions}/>
                    {renderSubPage()}
                    
                    <button className={`button-primary ${styles['activity-btn']}`} onClick={handleSelectActivity}>New activity</button>
                </>
            ) : null
            }
        </div>
    );
};

export default ManageContent;
