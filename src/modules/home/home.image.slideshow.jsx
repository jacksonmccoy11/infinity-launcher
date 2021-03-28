import React from 'react';
import { css } from '@emotion/css';

const Slideshow = () => {

    return <div className={styles.slideshowContainer}>
        <div className={styles.arrow}>left arrow</div>
        <div>
            <div>
                game 
            </div>
            <div>
                game info
            </div>
        </div>
        <div className={styles.arrow}>right arrow</div>
    </div>;
};

const styles = {
    arrow: css`
        align-self: center;
        cursor: pointer;
    `,
    slideshowContainer: css`
        padding-top: 10px;
        display: flex;
        flex-grow: 1;
        justify-content: center;
    `
};

export default Slideshow;