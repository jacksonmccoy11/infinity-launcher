import React from 'react';
import { css } from '@emotion/css';
import space from '../../media/space.jpg'

const HomeLayout = () => {

    return <div className={styles.homeContent}>
        <div className={styles.titleBar}>
            <div className={styles.title}>Welcome to Infinity Launcher</div>
            <input className={styles.input} type='text' placeholder='Search...' />
        </div>
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
    homeContent: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.75);
    `,
    info: css`
        padding: 10px;
    `,
    input: css`
        align-self: center;
        margin-right: 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.75);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-radius: 6px;
        padding: 6px;
    `,
    subtitle: css`
        font-size: 24px;
        padding: 10px;
    `,
    titleBar: css`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        background-image: url(${space});
        background-size: cover;
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