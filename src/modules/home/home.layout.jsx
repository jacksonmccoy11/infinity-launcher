import React from 'react';
import { css } from '@emotion/css';
import Slideshow from './home.image.slideshow';
import { Link } from 'react-router-dom';

const HomeLayout = () => {

    const onDownloadClick = () => {
        alert('Welcome to the matrix');
    };

    return <div className={styles.homeContent}>
        <div className={styles.titleBar}>
            <div className={styles.title}>Welcome to Infinity Launcher</div>
        </div>
        <Slideshow />
        <div className={styles.downloadContainer}>
            Download Infinity Launcher Today!
            <button className={styles.downloadButton} onClick={onDownloadClick}>Download</button>
        </div>
        <div className={styles.subtitle}>
            What are we?
        </div>
        <div className={styles.info}>
            There are too many launchers that exist today. When buying a new game, some companies have resorted to forcing you to download their custom launcher. <br />
            Other launchers like Steam and Epic Games have hundreds of game titles to purchase from their store. However, these games are constrained to each launcher. <br />
            This leads to gamers downloading tons of different launchers to play the games they purchase. <br /><br />
            
            Thats where we come in. With our launcher, you will be able to link your other launcher accounts to ours which will allow us to centralize all of your games into one launcher<br />
            We are the launcher to end all launchers!
        </div>
        <div className={styles.bottom}>
            Powered by the Infinity Launcher team! <Link to={`/contact`}>The Team</Link>
        </div>
    </div>;
};

const styles = {
    bottom: css`
        padding: 10px;
        background-color: #111111;
        text-align: center;
    `,
    downloadButton: css`
        width: 130px;
        height: 50px;
        background-color: blue;
        color: white;
        border: 2px solid black;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        &:hover { opacity: 75% }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    `,
    downloadContainer: css`
        font-size: 24px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        margin-bottom: 20px;
    `,
    gameContainer: css`
        display: flex;
        flex-grow: 1;
        justify-content: center;
    `,
    homeContent: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #222222;
    `,
    info: css`
        padding: 10px;
        background-color: #111111;
        text-align: center;
        margin-bottom: 37px;
    `,
    subtitle: css`
        background-color: #111111;
        font-size: 24px;
        padding: 10px;
        text-align: center;
    `,
    titleBar: css`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 20px;
        justify-content: space-between;
    `,
    title: css `
        display: flex;
        flex-direction: row;
        font-size: 30px;
        align-self: center;
        padding-left: 10px;
    `
};

export default HomeLayout;