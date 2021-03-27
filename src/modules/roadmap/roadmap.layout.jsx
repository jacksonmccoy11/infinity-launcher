import React from 'react';
import { css } from '@emotion/css';

const RoadmapLayout = () => {

    return <div className={styles.mainWrapper}>
        
        <div className={styles.main}>

            <div className={styles.description}>

                <h1>Roadmap</h1>
                <p>The roadmap for Infinity Launcher is both ambitious and tentative.<br></br>
                The current items have been determined to be what our userbase wants and<br></br>
                what our team thinks would be best to add in next.
                </p>

            </div>

            <ul className={styles.listWrapper}> 

                <li className={styles.list}>Automatic Game Aquiring

                    <div className={styles.listExplanation}>
                        
                        <p>Tired of adding individual games to the Infinity Launcher?<br></br>
                        With AGA, the Infinity Launcher will automagically detect all your games for you,<br></br> 
                        allowing you to instantly dive into the action whenever you want!</p>

                    </div>

                </li>

                <li className={styles.list}>Game Torrenting

                    <div className={styles.listExplanation}>

                        <p>Download pieces of the game from many other Infinity Launcher users<br></br>
                        to really kick your download speeds into overdrive! </p>

                    </div>

                </li>

                <li className={styles.list}>YouTube/Twitch Partnerships
                    
                    <div className={styles.listExplanation}>

                        <p>Brand recognition will allow us Infinity Launcher Devs<br></br>
                        to go toe-to-to with Steam and Epic, granting gamers the change that they want.</p>

                    </div>

                </li>

                <li className={styles.list}>Cross-Launcher Friends List
                    
                    <div className={styles.listExplanation}>
                
                        <p>A cross-launcher friends list will allow you to see what your friends are up to,<br></br>
                        and will help you connect to their lobby a lot quicker.</p>

                    </div>

                </li>


                <li className={styles.list}>Workshop/Mod Support

                    <div className={styles.listExplanation}>

                        <p>The Infinity Launcher Workshop will draw on mods from Steam and 3rd party modding websites,<br></br>
                        allowing you to find that perfect Gbombs 5 rendition that your Garry's Mod server <i>absolutely needs</i>.</p>

                    </div>

                </li>


                <li className={styles.list}>Edge-Computing Servers for High Traffic Areas

                    <div className={styles.listExplanation}>

                        <p>Edge Computing will bring the servers to your cities, allowing for maximum download speeds,<br></br>
                        minimum connection times, and a Cyberpunk 2077-level feeling of interconnectedness.</p>

                    </div>

                </li>


                <li className={styles.list}>Comprehensive Cross-Platform Networking Interface
                
                    <div className={styles.listExplanation}>
                    
                        <p>The ultimate tool in enabling cross-platform play, the CPNI will allow any development studio<br></br>
                        to easily make their games cross-platform on any console that they wish to release to.</p>

                    </div>
                    
                </li>

            </ul>

            <audio controls autoplay>
                <source src="https://wiki.teamfortress.com/w/images/2/20/Demoman_paincrticialdeath03.wav" type="audio/x-wav"></source>
            </audio>
            
            <audio controls autoplay>
                <source src="https://wiki.teamfortress.com/w/images/8/83/Spy_paincrticialdeath01.wav" type="audio/x-wav"></source>
            </audio>

        </div>

    </div>
};

const styles = {
    description: css `
        margin-right: 30px;
        background-color: #222222;
        margin-bottom: 750px;
        padding-left: 7px;
        padding-right: 7px;
        margin-top: 15px;
    `,
    list: css`
        font-size: 25px;
        margin-top: 5px;
        background-color: #222222;
    `,
    listExplanation: css`
        font-size: 14px;
        margin-top: 5px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #111111;
        margin-right: 45px;
        padding: 10px;
    `,
    main: css`
        display: flex;
        flex-direction: row;
        justify-content: space-arround;
    `,
    mainWrapper: css `
        display: flex;
        flex-direction: row;
        justify-content: center;    
    `,
    listWrapper: css `
        background-color: #222222;
    `
};

export default RoadmapLayout;