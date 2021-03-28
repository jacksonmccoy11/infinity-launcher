import React from 'react';
import { css } from '@emotion/css';
import Slideshow from './home.image.slideshow';

const HomeLayout = () => {

    return <div className={styles.homeContent}>
        <div className={styles.titleBar}>
            <div className={styles.title}>Welcome to Infinity Launcher</div>
        </div>
        <Slideshow />
        <div className={styles.subtitle}>
            What are we?
        </div>
        <div className={styles.info}>
            Our product is a centralized cloud library and storage for lightspeed downloads and  <br />
            We integrate with numerous existing game launchers to provide a single library containing all of your games. <br />
            We are the launcher to end all launchers...
        </div>
    </div>;
};

const styles = {
    gameContainer: css`
        display: flex;
        flex-grow: 1;
        justify-content: center;
    `,
    homeContent: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #222222
    `,
    info: css`
        padding: 10px;
    `,
    subtitle: css`
        font-size: 24px;
        padding: 10px;
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