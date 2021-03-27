import React from 'react';
import tf2Image from '../../media/tf2GameImage.png';
import { css } from '@emotion/css';

const StoreLayout = () => {

    return <div className={styles.background}>
        

        <div className={styles.menuBar} >

            <div className={styles.menuBarButton} > Browse</div>
            

        </div>

        <div className={styles.shoppingWindow} >

            <div className={styles.gameWindow} >

  
                <img src={tf2Image} alt='Infinity Logo' height = '100'className={styles.gamePicture} />

                <div className={styles.gameTitle}>

                       Team Fortress 2
                </div>

                <div className={styles.gamePrice}>

                        Price: Free
                </div>

            </div>

          
        </div>

    </div>
};

const styles = {
    link: css`
        color: white;
        text-decoration: none;
        padding: 14px;
    `,

    background: css`
        color: white;
        text-decoration: none;
        padding: 14px;
        background-color: #282828;
        height: 80vmin;
        width: auto;
    `,

    menuBar: css`
        padding: 6px;
        background-color: darkgrey;
        height: 5%;
        width: auto;
    `,

    menuBarButton: css`
        outline: 4px solid #1e1e1e;
        outline-offset: 4px;
        background-color: darkgrey;
        height: 100%;
        width: 10%;
    `,

    shoppingWindow: css`
        padding: 14px;
        background-color: #333333;
        height: 85%;
        width: auto;
        display: flex;
    `,

    gameWindow: css`
        padding: 14px;
        background-color: #1e1e1e;
        height: 85%;
        width: 20%;
        display: flex;
        flex-direction: column;
    `,

    gameTitle: css`
        padding: 14px;
        background-color: #1e1e1e;
        height: 20%;
    `,

    gamePrice: css`
        padding: 14px;
        background-color: #1e1e1e;
        height: 20%;
    `,

    gamePicture: css`
        background-size: cover;
    `,
}

export default StoreLayout;