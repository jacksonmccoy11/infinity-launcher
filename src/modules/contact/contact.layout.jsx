import React from 'react';
import { css } from '@emotion/css';



const ContactLayout = () => { 

    return <div className={styles.mainWrapper}>

        <div className={styles.main}>

            <div className={styles.contactWrapper}>

                <div className={styles.contactUsHeader}>
                    
                    <h1>CONTACT US</h1>

                </div>
                <p className={styles.contact}>The developers for the Infinity launcher are always available.<br></br>
                If you have any questions, concerns, or ideas, feel free to contact us!<br></br>
                We believe that transparency and communicativeness are key to a good company.
                </p>

            </div>

           <div className={styles.developersWrapper}>

                <div className={styles.developerWrapper}>

                    <div className={styles.developer}>
                        
                        <h2>Christian Redler</h2>
                        <div className={styles.developerExplanation}>

                            <p>Christian is a Computer Science student at UNO. He is the lead designer for Infinity Launcher.</p>
                            <br></br>
                            <br></br>
                            <a href="mailto:credler@unomaha.edu">email</a>

                        </div>

                    </div>

                </div>

                <div className={styles.developerWrapper}>

                    <div className={styles.developer}>
                        
                        <h2>Jacob Maguire</h2>
                        <div className={styles.developerExplanation}>

                            <p>Jacob Maguire is a Computer Engineering student at UNO. He is the Lead Marketing Strategist for Infinity Launcher.</p>
                            <a href="mailto:jacobmaguire@unomaha.edu">email</a>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.developersWrapper}>

                <div className={styles.developerWrapper}>

                    <div className={styles.developer}>
                        
                        <h2>Jackson McCoy</h2>
                        <div className={styles.developerExplanation}>

                            <p>Jackson is a Computer Science student at UNO. He is the Lead Engineer for Infinity Launcher.</p>
                            <br></br>
                            <br></br>
                            <a href="mailto:jacksonmccoy@unomaha.edu">email</a>

                        </div>

                    </div>

                </div>

                <div className={styles.developerWrapper}>

                    <div className={styles.developer}>
                        
                        <h2>Matt Toney</h2>
                        <div className={styles.developerExplanation}>

                            <p>Matt Toney is a Computer Science student at UNO. He is the Owner of Infinity Launcher.</p>
                            <br></br>
                            <a href="mailto:Ghostlyrave@unomaha.edu">email</a>

                        </div>

                    </div>

                </div>

            </div>


        </div>

    </div>
};

const styles = {

    contactWrapper: css `
    
        background-color: #222222;
        margin-bottom: 10px;
        margin-top: 10px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    `,

    contactUsHeader: css `
    
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-height: 65px;

    `,

    contact: css `

        background-color: #111111;    
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 10px;
        margin-right: 10px;

    `,

    developer: css`

        margin-top: 10px;
        background-color: #222222;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 200px;

    `,
    developerExplanation: css`
        
        background-color: #111111;
        padding-left: 10px;
        padding-right: 10px;
        min-height: 165px;
        max-height: 165px;

    `,
    main: css`
        display: flex;
        flex-direction: column;
        justify-content: center; 
    `,
    mainWrapper: css `

        display: flex;
        flex-direction: row;
        justify-content: center;  
          
    `,
    developersWrapper: css `

        background-color: #222222;
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 500px;
        
    `
};

export default ContactLayout;