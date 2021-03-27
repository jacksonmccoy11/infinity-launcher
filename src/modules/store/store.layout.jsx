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
            <input className={styles.input} type='text' placeholder='Search Store...' />
            

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

                    Sid Meiers Civilization Vl

                </div>

                <img src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsid-meiers-civilization-vl%2Fhome%2FEGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-7e8a0f1640e279cecbf9d4470c4e77e511645639.jpg?h=270&resize=1&w=480"} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsid-meiers-civilization-vl%2Fhome%2FEGS_SidMeiersCivilizationVI_FiraxisGames_G1A_01-1920x1080-70a9ef372967ad2aa1c4561e4168b3e30d3369a1.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsid-meiers-civilization-vl%2Fhome%2FEGS_SidMeiersCivilizationVI_FiraxisGames_G1A_03-1920x1080-52f7ab7189f7f45fc2473a91f0409ae012fab922.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsid-meiers-civilization-vl%2Fhome%2FEGS_SidMeiersCivilizationVI_FiraxisGames_G1A_05-1920x1080-d4edbf7580a7205ec446441f517b7cac09a234a8.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsid-meiers-civilization-vl%2Fhome%2FEGS_SidMeiersCivilizationVI_FiraxisGames_G1A_06-1920x1080-a18e1100499dabd465dd9f44c27cf9fb1171c3df.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, 
                    and compete against history's greatest leaders to build a civilization that will stand the test of time.
                </div>

                <div className={styles.gamePrice}>

                    $14.99 on Epic Games, Steam
                </div>

            </div>

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    The Outer Worlds

                </div>

                <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/578650/header.jpg?t=1616004214"} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={"https://images.gog-statics.com/b28374df0053964e4be9aefbb9426b4010377adb8162d2ce89af7f53b9f4a21b_product_card_v2_thumbnail_271.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://images.gog-statics.com/1b605ab4971c095257d54457a1c2fe4246afe2db135f2a027d888627b5906e5d_product_card_v2_thumbnail_271.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://images.gog-statics.com/3925422a1e3f5c5b0d398483fa83c7994af9f218d7d114612df5500605120527_product_card_v2_thumbnail_271.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://images.gog-statics.com/ecf2bc4615221cae1b965b00b29f563d4d33ea9f40b4212198caee6d1973a84b_product_card_v2_thumbnail_271.jpg"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    The Outer Worlds is an award-winning single-player RPG from Obsidian Entertainment and Private Division. As you explore a space colony, 
                    the character you decide to become will determine how this player-driven story unfolds. 
                    In the colony's corporate equation, you are the unplanned variable.

                </div>

                <div className={styles.gamePrice}>

                    $29.99 on GOG.COM
                </div>

            </div>

            <div className={styles.gameWindow}>

                <div className={styles.gameTitle}>

                    Teardown

                </div>

                <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/header.jpg?t=1614861328"} alt='Infinity Logo' height='40%' className={styles.gamePicture} />

                <div className={styles.gameExtraPictures}>

                    <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/ss_d633f77b3caafe0277cee6a9608066cc5dc0eca0.600x338.jpg?t=1614861328"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/ss_1539f339904fe5f7f000bd7bc9c9a05a4c56fe24.600x338.jpg?t=1614861328"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/ss_3fae1fe06faa722bd32bc7c144311036f8da3909.1920x1080.jpg?t=1614861328"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                    <img src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/ss_0342f0121fc3569fb2f0eef4792f670522d7e588.600x338.jpg?t=1614861328"} alt='Infinity Logo' height='100%' width='25%' className={styles.gameExtraPicture} />
                </div>

                <div className={styles.gameDescription}>

                    Prepare the perfect heist in this simulated and fully destructible voxel world. Tear down walls with vehicles or explosives to create shortcuts. 
                    Stack objects to reach higher. Use the environment to your advantage in the most creative way you can think of.
                </div>

                <div className={styles.gamePrice}>

                    $19.99 on Steam
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
        display: flex;
    `,

    menuBarButton: css`
        outline: 1px solid #1e1e1e;
        outline-offset: 1px;
        background-color: #333333;
        height: 100%;
        width: 10%;
        text-align: center;
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
        font-size: 1em;
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
        overflow: hidden;
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

    input: css`
        align-self: center;
        
        margin-left: auto;
        color: white;
        background-color: rgba(0, 0, 0, 0.75);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-radius: 6px;
        border-color: #1e1e1e;
        padding: 6px;
    `,
}

export default StoreLayout;