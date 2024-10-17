import React, { useState } from 'react';
import styles from './index.module.css'
import { courses , projects, feeds } from 'database/investor/profile';
import { showToast } from '../toast-сonfig';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import WalletPopup from 'components/popups/wallet-popup';
import { Link } from 'react-router-dom';
import ProgressBar from 'components/progress-bar';
const MySwal = withReactContent(Swal);
const ProfileContent = ({content}) => {

    const showAlert = () => {
        MySwal.fire({
            showCloseButton: true, 
            showConfirmButton: false, 
            backdrop: true, 
            html: <WalletPopup/>,  
            customClass: {
                popup: 'wallet-popup-inner'
            },
            backdrop: `
                rgba(0, 0, 0, 0.8) 
            `,
        });
    };

    const [commentsShow, setCommentsShow] = useState(Array(feeds.length).fill(false));
    const [isOpened, setIsOpened] = useState(Array(feeds.length).fill(false));
    const textLimit = 200;
    const handleCommentsShow = (index) => {
        setIsOpened(prevState => {
            const updatedState = [...prevState];
            updatedState[index] = !updatedState[index];
            return updatedState;
        });
    };
    const [likes, setLikes] = useState(feeds.map(feed => feed.likes));
    
    const handleSetLikes = (index) =>{
        
        setLikes(
            prevLikes => {
                let likesUpdate = [...prevLikes]
                likesUpdate[index] += 1;
                return likesUpdate;

            }
        )
    }

    const [newComment, setNewComment] = useState(feeds.map(() => ''));
    const [feedsState, setFeedsState] = useState(feeds);
    const formatDate = (date) => {
        const options = {
            month: 'short',
            day: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true, 
        };
        return new Date(date).toLocaleString('en-US', options);
    };
    
  
    const handleAddComment = (index) => {
        const commentText = newComment[index].trim();
        if (!commentText) return;
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        const updatedFeeds = [...feedsState];
        updatedFeeds[index].comments = [
            ...updatedFeeds[index].comments,
            {
                name: 'James Smith',
                avatar: 'user3',
                date: formattedDate,
                text: newComment,
            }
        ];
        setFeedsState(updatedFeeds); 
        setNewComment(prevComments => {
            const updatedComments = [...prevComments];
            updatedComments[index] = '';
            return updatedComments;
        });
    };

    const handleCommentChange = (index, value) => {
        setNewComment(prevComments => {
            const updatedComment = [...prevComments];
            updatedComment[index] = value;
            return updatedComment;
        });
    };

    const [coursesState, setCoursesState] = useState(courses);

    const handleCourseSubmit = (index) =>{
        setCoursesState(prevCourses => {
            const updateCourses = [...prevCourses];
            updateCourses[index].isStarted  = true;
            return updateCourses
        })
        showToast('You have added to the project "Virtual Versions"');
    }

    return (
        <div className={styles['content-container']}>
            {
            content === 'Account' ? (
                <div className={styles['account-wrapper']}>
                    <h2 className={`${styles.title} secondary-title`}>About</h2>
                    <div className={styles.about}>
                        <div className={styles['about-item']}>
                            <p>First Name</p>
                            <p>James</p>
                        </div>
                        <div className={styles['about-item']}>
                            <p>Last Name</p>
                            <p>Smith</p>
                        </div>
                        <div className={styles['about-item']}>
                            <p>Nickname</p>
                            <p>@investor</p>
                        </div>
                        <div className={styles['about-item']}>
                            <p>Birthday</p>
                            <p>11.05.1988</p>
                        </div>
                        <div className={styles['about-item']}>
                            <p>Country</p>
                            <div className={styles['country-container']}>
                                <img src='../assets/img/icons/usa.png' alt='usa icon'/>
                                <p>USA</p>
                            </div>
                        </div>
                    </div>
                </div>

            ) : content === 'Courses' ? (
                <div className={styles['courses-wrapper']}>
                    {courses && courses.length > 0 && (
                        courses.map((course, index) => (
                        <div className={styles['courses-item']} key={index}>
                            <div className={styles['courses-image']}>
                                <img src={`../assets/img/${course.img}.png`} alt={course.name}/>
                            </div>
                            <div className={styles['courses-content']}>
                                <h3 className={styles['courses-title']}>
                                    {course.name}
                                </h3>
                                <div className={styles['courses-desc']}>
                                    {course.desc}
                                </div>
                                <div className={styles['progress-bar-wrapper']}>
                                    <ProgressBar  progress={course.progress}/>
                                </div>
                                {course.isStarted ? (
                                    <Link to='/course' className='button-success'>Explore the course</Link>
                                ):(
                                    <button className='button-primary' onClick={()=>handleCourseSubmit(index)}>Submit an application</button>
                                )}
                                
                            </div>
                        </div>
                        ))
                    )
                    }
                </div>
               
            ) : content === 'Projects' ? (
                <div className={styles['projects-wrapper']}>
                    {projects && projects.length > 0 && (
                        projects.map((project, index) => (
                        <div className={styles['projects-item']} key={index}>
                            <div className={styles['projects-image']}>
                                <img src={`../assets/img/${project.img}.png`} alt={project.name}/>
                            </div>
                            <div className={styles['projects-content']}>
                                <h3 className={styles['projects-title']}>
                                    {project.name}
                                </h3>
                                <div className={styles['projects-desc']}>
                                    <p>{`${project.active ? `Active ${project.active} weeks ago` : 'Inactive'}`}</p>
                                    <p>{`${project.isPublic ? 'Public' : 'Private'}`}</p>
                                </div>
                                {project.isMember ? (
                                    <button className='button-success'>Member</button>
                                ):(
                                    <button className='button-primary'>Submit an application</button>
                                )}
                                
                            </div>
                        </div>
                        ))
                    )
                    }
                </div>
            ) : content === 'Myfeed' ? (
                <>
                   {feeds && feeds.length > 0 && (
                        feeds.map((feed, index) => (
                            <div className={styles['feed-wrapper']} key={index}>
                                <div className={styles['user-data']}>
                                    <div className={styles['user-avatar']}>
                                        <img src={`../assets/img/${feed.avatar}.png`} alt={feed.name}/>
                                    </div>
                                    <div className={styles['user-info']}>
                                        <p className={styles['user-name']}>{feed.name}</p>
                                        <p className={styles['feed-date']}>{feed.date}</p>
                                    </div>
                                </div>
                                <div className={styles['feed-text']}>
                                    {isOpened[index] || feed.text.length <= textLimit ? (
                                        feed.text
                                    ) : (
                                        `${feed.text.slice(0, textLimit)}...`
                                    )}
                                    {feed.text.length > textLimit && (
                                        <button className={styles['text-show-btn']} onClick={() => handleCommentsShow(index)}>
                                            {isOpened[index] ? 'Show Less' : 'Show More'}
                                        </button>
                                    )}
                                </div>
                                <div className={styles['interaction-buttons']}>
                                    <button className={styles['button-like']} onClick={()=>handleSetLikes(index)}>
                                        <img src={`../assets/img/icons/like.png`} alt="like"/>
                                        <p className={styles['likes-count']} >{likes[index]}</p>
                                    </button>
                                    <button className={styles['button-comments']} onClick={() => {
                                        setCommentsShow(prevState => {
                                            const updatedState = [...prevState];
                                            updatedState[index] = !updatedState[index];
                                            return updatedState;
                                        });
                                    }}>
                                        <img src={`../assets/img/icons/comment.png`} alt="comments"/>
                                        <p className={styles['comments-count']}>{feed.comments.length}</p>
                                    </button>
                                </div>
                                {commentsShow[index]  && (
                                <>
                                    <div className={styles['comments-wrapper']}>
                                        {feed.comments.map((comment, index) => (
                                            <div className={styles['comment-item']} key={index}>
                                               <div className={styles['user-data']}>
                                                    <div className={styles['user-avatar']}>
                                                        <img src={`../assets/img/${comment.avatar}.png`} alt={comment.name}/>
                                                    </div>
                                                    <div className={styles['user-info']}>
                                                        <p className={styles['user-name']}>{comment.name}</p>
                                                        <p className={styles['comment-text']}>{comment.text}</p>
                                                        <p className={styles['feed-date']}>{comment.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles['comment-form']}>
                                        <div className={styles['user-avatar']}>
                                            <img src={`../assets/img/user3.png`} alt='James Smith'/>
                                        </div> 
                                        <div className={styles['form-wrapper']}>
                                            <textarea
                                            className={styles.textarea}
                                            value={newComment[index]}
                                            onChange={(e)=>handleCommentChange(index, e.target.value)}
                                            placeholder='The largest investors and contribution percentages'
                                            />
                                            <button 
                                            className={`${styles['add-comment-btn']}`}
                                            onClick={()=>handleAddComment(index)}
                                            >
                                                <img src={`../assets/img/icons/send.png`} alt='icon'/>
                                            </button>
                                        </div>
                                    </div>
                                </>
                                )}
                            </div>
                        ))
                    )}

                </>
            ) : content === 'Wallets' ? (
                <div className={styles['wallets-wrapper']}>
                    <h2 className={`${styles.title} secondary-title`}>Wallets</h2>
                    <div className={styles.about}>
                        <div className={styles['wallets-item']}>
                            <img src={'../assets/img/icons/wallet1.png'} alt='EVM'/>
                            <p>EVM (ERC20, BSC20, etc.)</p>
                        </div>
                        <div className={styles['wallets-item']}>
                            <img src={'../assets/img/icons/wallet2.png'} alt='Solana'/>
                            <p>Solana</p>
                        </div>
                        <div className={styles['wallets-item']}>
                            <img src={'../assets/img/icons/wallet3.png'} alt='TRC20'/>
                            <p>TRC20</p>
                        </div>
                        <button className={`${styles['wallet-btn']} button-primary` } onClick={showAlert}>Connect wallet</button>
                    </div>
                </div>
            ) : null
            }
        </div>
    );
};

export default ProfileContent;
