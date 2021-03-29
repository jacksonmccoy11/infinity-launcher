import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const CommunityReplies = ({ replies }) => {
    const [displayReplies, setDisplayReplies] = useState(false);
    const [currentReplies, setCurrentReplies] = useState(replies);
    const [message, setMessage] = useState('');

    const onCollapsedReplyClick = () => {
        setDisplayReplies(true);
    };

    const onCollapseClick = () => {
        setDisplayReplies(false);
    };

    const onKeyClick = event => {
        setMessage(event.target.value);
    };

    const onPost = () => {
        let newReply = [...currentReplies];

        if (message.length === 0) {
            return;
        }

        newReply.push({ user: 'Unknown User', message});
        setCurrentReplies(newReply);
        setMessage('');
    };

    const onCancel = () => {
        setMessage('');
    };

    if (!displayReplies) {
        return <div className={styles.collapedReplies}>
            <div className={styles.replyLink} onClick={onCollapsedReplyClick}>
                {`${currentReplies.length} replies`}
            </div>
        </div>;
    }

    return <>
        {currentReplies.map(reply => {
            return <div className={styles.reply}>
                <div className={styles.replyUser}>
                    {reply.user}
                </div>
                <div className={styles.replyMessage}>
                    {reply.message}
                </div>
            </div>;
        })}
        <div className={styles.replyArea}>
            <div className={styles.replyUser}>Unknown User</div>
            <textarea className={styles.input} value={message} type='text' placeholder='Reply...' onChange={onKeyClick} />
            <div className={styles.buttons}>
                <div className={styles.collapseLink} onClick={onCollapseClick}>
                    Collapse
                </div>
                <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
                <button className={styles.postButton} onClick={onPost}>Post</button>
            </div>
        </div>
    </>;
};

CommunityReplies.propTypes = {
    replies: PropTypes.array
};

const styles = {
    collapseLink: css`
        flex-shrink: 1;
        cursor: pointer;
        text-decoration: underline;
    `,
    buttons: css`
        margin-top: 5px;
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;
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
        margin-left: 20px;
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
    replyLink: css`
        flex-shrink: 1;
        cursor: pointer;
        text-decoration: underline;
    `,
    reply: css`
        background-color: #222222;
        padding-top: 10px;
        padding-left: 40px;
    `,
    replyUser: css`
        background-color: #333333;
        font-size: 20px;
        padding: 10px;
    `,
    replyMessage: css`
        background-color: #111111;
        font-size: 16px;
        padding: 10px;
        line-height: 2;
    `,
    input: css`
        margin-right: 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        min-width: 916px;
        max-width: 916px;
        max-height: 200px;
        padding: 10px;
        font-size: 16px
    `,
    replyArea: css`
        align-items: right;
        background-color: #222222;
        padding-top: 10px;
        padding-left: 40px;
    `,
};

export default CommunityReplies;