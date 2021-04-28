import React, { useState } from 'react';
import { css } from '@emotion/css';
import games from './game.images.json';
import { useParams } from 'react-router';
import history from '../redux/history';
import PaymentSection from './payment.summary';

const PaymentLayout = () => {
    const { game } = useParams();
    const selectedGame = games[game];
    const [selectedImage, setSelectedImage] = useState(0);



    const goBack = () => {
        history.goBack();
    };

    const onImageClick = index => {
        setSelectedImage(index);
    };

    const displaySideImages = () => {
        return selectedGame.images.map((image, index) => {
            const style = index === selectedImage ? {outline: '2px solid blue'} : {outline: '2px solid #1e1e1e'};

            return <div onClick={() => onImageClick(index)}>
                <img src={image} alt={selectedGame.name} style={style} className={styles.gameSidePicture} />
            </div>;
        });
    };

    if (!selectedGame) {
        return <div>
            <div>404: Game not found</div>
            <button onClick={goBack}>Go Back</button>
        </div>;
    }

    return <div className={styles.background}>
        <div className={styles.gameContainer}>
            <div className={styles.gameTitle}>
                {selectedGame.name}
            </div>
            <div className={styles.gameImages}>
                <img src={selectedGame.images[selectedImage]} alt={selectedGame.name} className={styles.gamePicture} />
                <div>
                    {displaySideImages()}
                </div>
            </div>
            <div className={styles.gameDescription}>
                {selectedGame.description}
            </div>
        </div>
        <PaymentSection launcherOptions={selectedGame.launchers} />
    </div>;
};

const styles = {
    background: css`
        display: flex;
        color: #ededed;
        text-decoration: none;
        padding: 14px;
        background-color: #282828;
    `,
    gameContainer: css`
        width: 60%;
    `,
    gameDescription: css`
        background-color: #1e1e1e;
        padding: 10px;
    `,
    gameImages: css`
        display: flex;
    `,
    gamePicture: css`
        background-size: cover;
        height: 390px;
        width: 700px;
        outline: 2px solid #1e1e1e;
        margin-right: 4px;
    `,
    gameSidePicture: css`
        background-size: cover;
        height: 75px;
        width: 150px;
    `,
    gameTitle: css`
        text-align: left;
        background-color: #1e1e1e;
        width: 845px;
        padding: 6px;
        font-size: 26px;
    `,
    paymentContainer: css`
        flex-grow: 1;
    `,
    sidePictureContainer: css`
        outline: 2px solid #1e1e1e;
    `,
    selectedImage: css`
        outline: 2px solid blue;
    `
}

export default PaymentLayout;