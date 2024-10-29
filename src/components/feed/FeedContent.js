import React, { useState } from 'react';
import styles from './index.module.css'
import ProgressBar from 'components/progress-bar';
import { feeds } from 'database/investor/profile';
import FeedUi from 'components/feed-ui';
import DoughnutChart from 'components/data-visualization-ui/DoughnutChart';
import LineChart from 'components/data-visualization-ui/LineChart';
import BarChart from 'components/data-visualization-ui/BarChart';
import ProgressChart from 'components/data-visualization-ui/ProgressChart';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PostPopup from 'components/popups/post-create-popup';
import { useDispatch } from 'react-redux';
import {setActiveMenuItem } from '../../store';
import { useParams } from 'react-router-dom';

const MySwal = withReactContent(Swal);





const FeedContent = ({content, changeContent}) => {
   

    const handleCreatePost = () => {
        MySwal.fire({
            showCloseButton: true, 
            showConfirmButton: false, 
            backdrop: true, 
            html: <PostPopup feeds={feeds}/>,  
            customClass: {
                popup: 'create-post-popup-inner'
            },
            backdrop: `
                rgba(0, 0, 0, 0.8) 
            `,
        });
    }
    
    const { name } = useParams();
    
    return (
        <div className={styles['content-container']}>
            { content === 'Feed' && !name ? (
                <div className={styles['feed-content-wrapper']}>
                    <h2 className={`${styles.title} secondary-title`}>Current activity project</h2>
                    <div className={styles['cards-container']}>
                        <div className={`${styles['feed-card']} ${styles['airdrop-card']}`} onClick={()=>changeContent('Manage')}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Airdrop
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                            </div>
                        </div>
                        <div className={`${styles['feed-card']} ${styles['investround-card']}`} onClick={()=>changeContent('Manage')}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Investround
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                               <div>
                                    <p className={styles['card-text']}>
                                        Date
                                    </p>
                                    <p className={styles['card-text']}>
                                        24.10.24
                                    </p>
                               </div>
                                <ProgressBar progress={45} context={'green'}/>
                                
                            </div>
                        </div>
                    </div>
                    <button className={`button-primary ${styles['create-post-btn']}`} onClick={handleCreatePost}>Create post</button>
                    <FeedUi feeds={feeds}/>
                </div>

            ) :
            content === 'Feed' && name ? (
                <div className={styles['feed-content-wrapper']}>
                    <h2 className={`${styles.title} secondary-title`}>Current activity SolarGrid</h2>
                    <div className={styles['cards-container']}>
                        <div className={`${styles['feed-card']} ${styles['airdrop-card']}`} onClick={()=>changeContent('Airdrop')}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Airdrop
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                            </div>
                        </div>
                        <div className={`${styles['feed-card']} ${styles['investround-card']}`} onClick={()=>changeContent('Investround')}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Investround
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                               <div>
                                    <p className={styles['card-text']}>
                                        Date
                                    </p>
                                    <p className={styles['card-text']}>
                                        24.10.24
                                    </p>
                               </div>
                                <ProgressBar progress={45} context={'green'}/>
                                
                            </div>
                        </div>
                    </div>
                    <button className={`button-primary ${styles['create-post-btn']}`} onClick={handleCreatePost}>Create post</button>
                    <FeedUi feeds={feeds}/>
                </div>

            ) : content === 'Airdrop' ? (
                <div className={`${styles['feed-content-wrapper']} ${styles.airdrop}`}>
                    <h2 className={`${styles.title} secondary-title`}>Current activity </h2>
                    <div className={styles['cards-container']}>
                        <div className={`${styles['feed-card']} ${styles['airdrop-card']}`}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Airdrop
                                </p>
                            <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <h2 className={`${styles.title} secondary-title`}>Airdrop</h2>
                    <div className={styles['airdrops-container']}>
                        <div className={`${styles['airdrops-item']}`}>
                            <div className={styles['item-logo']}>
                                <img src='../assets/img/galxe.png' alt='Galxe'/>
                            </div>
                            <div className={styles['item-info']}>
                                <strong className={styles['name']}>
                                    Complete tasks on Galxe
                                </strong>
                                <p className={styles['desc']}>
                                    Earn a score of 1000 or greaater to earn the Galxe badge!
                                </p>
                            </div>
                            <div className={styles['item-action']}>
                                    <p className={`${styles['status']} ${styles['completed']}`}>
                                        Completed
                                    </p>
                                    <button className={` button-primary`}>
                                        Participate
                                    </button>
                            
                            </div>
                        </div>
                        <div className={`${styles['airdrops-item']}`}>
                            <div className={styles['item-logo']}>
                                <img src='../assets/img/Quiz.png' alt='Quiz'/>
                            </div>
                            <div className={styles['item-info']}>
                                <strong className={styles['name']}>
                                    Complete Layer3 Quiz
                                </strong>
                                <p className={styles['desc']}>
                                    Complete the quiz and mint the cube NFT to earn the Layer3 badge!
                                </p>
                            </div>
                            <div className={styles['item-action']}>
                                    <p className={`${styles['status']} ${styles['not-started']}`}>
                                        Not started
                                    </p>
                                    <button className={` button-primary`}>
                                        Participate
                                    </button>
                            
                            </div>
                        </div>
                    </div>
                </div>
               
            ) : content === 'Investround' ? (
                <div className={`${styles['feed-content-wrapper']} ${styles.investround}`}>
                    <h2 className={`${styles.title} secondary-title`}>Current activity </h2>
                    <div className={styles['cards-container']}>
                        <div className={`${styles['feed-card']} ${styles['investround-card']}`}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Investround
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                               <div>
                                    <p className={styles['card-text']}>
                                        Date
                                    </p>
                                    <p className={styles['card-text']}>
                                        24.10.24
                                    </p>
                               </div>
                                <ProgressBar progress={45} context={'green'}/>
                            </div>
                        </div>
                    </div>
                    <h2 className={`${styles.title} secondary-title`}>Investround</h2>
                    <div className={styles['investround-container']}>
                       <div className={styles['main-stats']}>
                            <div className={styles['main-elem']}>
                                <p>Open</p>
                                <strong>24.10.24</strong>
                            </div>  
                            <div className={styles['main-elem']}>
                                <p>Total Allocation</p>
                                <strong>250,000 USDT</strong>
                            </div>  
                            <div className={styles['main-elem']}>
                                <p>Deposits</p>
                                <strong>1,900 USDT</strong>
                            </div>  
                       </div>
                       <div className={styles['participate-wrapper']}>
                            <h3 className={`${styles['participate-title']} third-title`}>Participate in VV Round</h3>
                            <p>Allocation</p>
                            <ProgressBar progress={45} total={'3,454'} context={'green'}/>
                            <div className={styles['become-member']}>
                                <p>
                                    Your allegeable
                                </p>
                                <p>
                                    You can become a member of the investment round
                                </p>
                            </div>
                            <label for="deposit">Deposit</label>
                            <input name='deposit' type='text' placeholder='0 USDT'/>
                            <button className={`button-primary ${styles['participate-bth']}`}>Participate</button>
                       </div>
                    </div>
                </div>
            ) : content === 'Details' ? (
                <div className={`${styles['feed-content-wrapper']} ${styles.details}`}>
                    <h2 className={`${styles.title} secondary-title`}>Current activity</h2>
                    <div className={styles['cards-container']} onClick={()=>changeContent('Investround')}>
                        <div className={`${styles['feed-card']} ${styles['investround-card']}`}>
                            <div className={styles['card-info']}>
                                <p className={styles['status']}>
                                    Active
                                </p>
                                <p className={styles['name']}>
                                    Investround
                                </p>
                               <div>
                                    <p className={styles['card-text']}>
                                        Participants
                                    </p>
                                    <p className={styles['card-text']}>
                                        45,000
                                    </p>
                               </div>
                               <div>
                                    <p className={styles['card-text']}>
                                        Date
                                    </p>
                                    <p className={styles['card-text']}>
                                        24.10.24
                                    </p>
                               </div>
                                <ProgressBar progress={45} context={'green'}/>
                            </div>
                        </div>
                    </div>
                    <h2 className={`${styles.title} secondary-title`}>Investround</h2>
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
                            <BarChart/>
                        </div>
                    </div>
                </div>
            ) : null
            }
        </div>
    );
};

export default FeedContent;
