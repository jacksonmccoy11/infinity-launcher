import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';
import CommunityReplies from './community.reply';

const THREADS = [
    {
        user: 'Johnny Hotbody',
        title: 'Please help! I can\'t purchase games.',
        message: 'I navigated to the store and don\'t see an option to purchase any of the games on this site.',
        replies: [
            {
                user: 'Infinity Launcher Team',
                message: 'We currently outsource purchasing game titles to other launchers. However, if you purchase the game from one of our verified integrated launchers,' + 
                             ' the game will automatically show up in your Infinity Launcher library. You can make use of our price comparison tool to find the lowest price across all verified launchers.'
            },
            {
                user: 'Johnny Hotbody',
                message: 'Awesome! Thank you!'
            }
        ]
    },
    {
        user: 'Grace',
        title: 'Infinity Launcher is awesome!',
        message: 'I saved so much money with their awesome price comparison tool. All of my games are super easy to find now and anywhere I go I have my game saves.',
        replies: [
            {
                user: 'Infinity Launcher Team',
                message: 'We know'
            },
            {
                user: 'Johnny Hotbody',
                message: 'These guys!'
            }
        ]
    }
]

const CommunityLayout = () => {
    const ref = useRef();
    const [currentThreads, setCurrentThreads] = useState(THREADS);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ref, currentThreads]);

    const onTitleChange = event => {
        setTitle(event.target.value);
    };

    const onMessageChange = event => {
        setMessage(event.target.value);
    };

    const onPost = () => {
        let newThread = [...currentThreads];

        if (message.length === 0 || title.length === 0) {
            return;
        }

        newThread.push({ user: 'Unknown User', title, message, replies: [] });
        setCurrentThreads(newThread);
        setTitle('');
        setMessage('');
    };

    const onCancel = () => {
        setTitle('');
        setMessage('');
    };

    return <div className={styles.community}>
        <div className={styles.welcomeMessage}>
            Welcome to the community! <br /> You can read messages from the community along with posting and replying yourself.
        </div>
        <div className={styles.newThreadArea}>
            <div className={styles.threadUser}>Unknown User</div>
            <input className={styles.titleInput} value={title} type='text' placeholder='Title...' onChange={onTitleChange} />
            <textarea className={styles.input} value={message} type='text' placeholder='New Thread...' onChange={onMessageChange} />
            <div className={styles.buttons}>
                <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
                <button className={styles.postButton} onClick={onPost}>Post</button>
            </div>
        </div>
        <div className={styles.threads}>
            {currentThreads.map(thread => {
                return <div className={styles.thread}>
                    <div className={styles.titleBar}>
                        <div className={styles.title}>
                            {thread.title}
                        </div>
                        <div className={styles.user}>
                            {thread.user}
                        </div>
                    </div>
                    <div className={styles.message}>
                        {thread.message}
                    </div>
                    <CommunityReplies replies={thread.replies} />
                </div>;
            })}
            <div ref={ref} />
        </div>
    </div>
};

const styles = {
    community: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    threads: css`
        width: 1000px;
    `,
    thread: css`
        background-color: #222222;
        padding: 10px;
        margin-bottom: 40px;
    `,
    titleBar: css`
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        background-color: #333333;
        padding: 10px;
    `,
    user: css`
        font-size: 18px;
    `,
    message: css`
        background-color: #111111;
        font-size: 18px;
        padding: 10px;
    `,
    welcomeMessage: css`
        background-color: #111111;
        font-size: 18px;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
    `,
    buttons: css`
        margin-top: 5px;
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
    `,
    postButton: css`
        width: 80px;
        height: 30px;
        background-color: blue;
        color: white;
        border: 2px solid black;
        border-radius: 10px;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        cursor: pointer;
        &:hover { opacity: 75% }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    `,
    cancelButton: css`
        width: 80px;
        height: 30px;
        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        &:hover { opacity: 75% }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    `,
    collapedReplies: css`
        display: flex;
        background-color: #222222;
        padding-top: 10px;
        padding-bottom: 10px;
        justify-content: center;
    `,
    reply: css`
        background-color: #222222;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;
    `,
    threadUser: css`
        background-color: #333333;
        font-size: 20px;
        padding: 10px;
    `,
    titleInput: css`
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        width: 976px;
        padding: 10px;
        font-size: 16px
    `,
    input: css`
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        min-width: 976px;
        max-width: 976px;
        max-height: 200px;
        padding: 10px;
        font-size: 16px
    `,
    newThreadArea: css`
        align-items: right;
        background-color: #222222;
        padding: 10px;
        margin-bottom: 40px;
        width: 1000px;
    `,
};

export default CommunityLayout;