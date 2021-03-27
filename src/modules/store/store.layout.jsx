import React from 'react';
import tf2Image from '../../media/tf2GameImage.png';
import tf2Image1 from '../../media/tf2Image1.png';
import tf2Image2 from '../../media/tf2Image2.png';
import tf2Image3 from '../../media/tf2Image3.png';
import tf2Image4 from '../../media/tf2Image4.png';
import { css } from '@emotion/css';

const StoreLayout = () => {

    return <div className={styles.background}>
        

        <div className={styles.menuBar} >

            <div className={styles.menuBarButton} > Browse</div>
            

        </div>

        <div className={styles.shoppingWindow} >

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    Team Fortress 2

                </div>
  
                <img src={tf2Image} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={tf2Image1} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image2} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image3} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image4} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Nine distinct classes provide a broad range of tactical abilities and personalities.
                    Constantly updated with new game modes, maps, equipment and, most importantly, hats!
                </div>

                <div className={styles.gamePrice}>

                        Free on Steam
                </div>

            </div>

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    Team Fortress 2

                </div>

                <img src={tf2Image} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={tf2Image1} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image2} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image3} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image4} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Nine distinct classes provide a broad range of tactical abilities and personalities.
                    Constantly updated with new game modes, maps, equipment and, most importantly, hats!
                </div>

                <div className={styles.gamePrice}>

                    Free on Steam
                </div>

            </div>

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    Team Fortress 2

                </div>

                <img src={tf2Image} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={tf2Image1} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image2} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image3} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image4} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Nine distinct classes provide a broad range of tactical abilities and personalities.
                    Constantly updated with new game modes, maps, equipment and, most importantly, hats!
                </div>

                <div className={styles.gamePrice}>

                    Free on Steam
                </div>

            </div>

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    Team Fortress 2

                </div>

                <img src={tf2Image} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={tf2Image1} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image2} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image3} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={tf2Image4} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Nine distinct classes provide a broad range of tactical abilities and personalities.
                    Constantly updated with new game modes, maps, equipment and, most importantly, hats!
                </div>

                <div className={styles.gamePrice}>

                    Free on Steam
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
        padding: 4px;
        background-color: #1e1e1e;
        height: 90%;
        width: 20%;
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
    `,

    gameTitle: css`
        padding: 14px;
        background-color: #333333;
        height: 5%;
        text-align: center;
        font-family: "Arial";
    `,

    gamePrice: css`
        padding: 14px;
        background-color: #333333;
        height: 10%;

        outline: 4px solid #1e1e1e;
        outline-offset: 0px;

        text-align: center;
        font-family: "Arial";
    `,

    gameDescription: css`
        padding: 14px;
        background-color: #333333;
        height: 25%;

        outline: 4px solid #1e1e1e;
        outline-offset: 0px;

        text-align: left;
        font-family: "Arial";
    `,

    gamePicture: css`
        background-size: cover;

        outline: 4px solid #1e1e1e;
        outline-offset: 0px;
    `,

    gameExtraPicture: css`
        background-size: cover;

        outline: 4px solid #1e1e1e;
        outline-offset: 0px;
    `,
}

export default StoreLayout;