import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import launchers from '../../media/launchers.png';
import launcher from '../../media/launcher.png';
import leftarrow from '../../media/leftarrow.png';
import rightarrow from '../../media/rightarrow.png';

const SLIDESHOW = [
    {
        img: launchers,
        alt: 'Multiple Launchers',
        description: 'Tired of clicking through launchers to find the game you want to play? Infinity Launcher can help by centralizing all of your games into a single launcher.'
    },
    {
        img: launcher,
        alt: 'Our Launcher',
        description: 'With our integrated library, any games purchased from providers will automatically show up in your library. All of your game saves are synced to our seamless cloud servers ready to be played anywhere.'
    }
]

const Slideshow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [manualNavigation, setManualNavigation] = useState(false);
    const currentSlide = SLIDESHOW[currentSlideIndex];;

    useEffect(() => {
        const slideTimer = setInterval(() => {
            if (!manualNavigation) {
                if (SLIDESHOW.length - 1 === currentSlideIndex) {
                    setCurrentSlideIndex(0)
                } else {
                    setCurrentSlideIndex(state => state + 1)
                }
            }
        }, 5000);

        return () => clearTimeout(slideTimer);
    }, [currentSlideIndex, manualNavigation]);

    const onLeftClick = () => {
        setManualNavigation(true);

        if (currentSlideIndex === 0) {
            setCurrentSlideIndex(SLIDESHOW.length - 1);
        } else {
            setCurrentSlideIndex(state => state - 1);
        }
    }

    const onRightClick = () => {
        setManualNavigation(true);

        if (SLIDESHOW.length - 1 === currentSlideIndex) {
            setCurrentSlideIndex(0);
        } else {
            setCurrentSlideIndex(state => state + 1);
        }
    };

    return <div className={styles.slideshowContainer}>
        <div className={styles.arrow} onClick={onLeftClick}>
            <img height='100%' width='100%' src={leftarrow} alt={currentSlide.alt} />
        </div>
        <div className={styles.slide}>
            <img height='300px' width='100%' src={currentSlide.img} alt={currentSlide.alt} />
            <div className={styles.slideInfo}>{currentSlide.description}</div>
        </div>
        <div className={styles.arrow} onClick={onRightClick}>
            <img height='100%' width='100%' src={rightarrow} alt={currentSlide.alt} />
        </div>
    </div>;
};

const styles = {
    arrow: css`
        align-self: center;
        cursor: pointer;
        width: 60px;
        background-color: #333333;
    `,
    slide: css`
        background-color: #111111;
        width: 600px;
        padding: 2px;
    `,
    slideInfo: css`
        padding: 10px;
        overflow-wrap: break-word;
    `,
    slideshowContainer: css`
        padding-top: 10px;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        height: 400px;
    `
};

export default Slideshow;