import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import PaymentMethod from './payment.method';

const PaymentSummary = ({ launcherOptions }) => {
    const [ selectedLauncher, setSelectedLauncher ] = useState(launcherOptions[0]);
    const [ total, setTotal ] = useState(0);
    const nebraskaStateTax = .055;

    useEffect(() => {
        let priceSum = 0;
        priceSum += getInfinityLauncherPrice();
        priceSum += parseFloat(selectedLauncher.price);
        priceSum += getTaxPrice();

        setTotal(priceSum);
    }, [selectedLauncher]);

    const onLauncherClick = event => {
        const selectedIndex = parseInt(event.target.value);

        setSelectedLauncher(launcherOptions[selectedIndex]);
    };

    const displayLauncherSelection = () => {
        const index = launcherOptions.findIndex(launcher => {
            return launcher.name === selectedLauncher.name;
        });

        return <select className={styles.dropdown} onChange={onLauncherClick} value={index}>
            {launcherOptions.map((launcher, i) => {
                return <option className={styles.dropdownOptions} key={i} value={i}>{launcher.name}</option>;
            })}
        </select>;
    };

    const getInfinityLauncherPrice = () => {
        const price = parseFloat(selectedLauncher.price);

        if (price === 0) {
            return 0;
        }

        if (price >= 59.99) {
            return 2.30;
        }

        return 0.50;
    };

    const getTaxPrice = () => {
        const price = parseFloat(selectedLauncher.price);

        return price * nebraskaStateTax;
    };

    return <div className={styles.paymentContainer}>
        <div className={styles.launcherInfoContainer}>
            <div>
                {displayLauncherSelection()}
            </div>
            <div className={styles.price}>{`$ ${parseFloat(selectedLauncher.price).toFixed(2)}`}</div>
        </div>
        <div className={styles.paymentSummary}>
            <div className={styles.launcherSummary}>
                <div>{selectedLauncher.name}</div>
                <div>{`$ ${parseFloat(selectedLauncher.price).toFixed(2)}`}</div>
            </div>
            <div className={styles.launcherSummary}>
                <div>Infinity Launcher</div>
                <div>{`$ ${getInfinityLauncherPrice().toFixed(2)}`}</div>
            </div>
            <div className={styles.taxSummary}>
                <div>Tax (NE)</div>
                <div>{`$ ${getTaxPrice().toFixed(2)}`}</div>
            </div>
            <div className={styles.totalSummary}>
                <div>Total</div>
                <div>{`$ ${total.toFixed(2)}`}</div>
            </div>
        </div>
        <PaymentMethod />
    </div>;
};

PaymentSummary.propTypes = {
    launcherOptions: PropTypes.array
};

const styles = {
    dropdown: css`
        color: #dbdbdb;
        font-size: 16px;
        border: none;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.65);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-radius: 6px;
        border-color: #dbdbdb;
        padding: 6px;
        width: 150px;
        &:focus {
            outline: none;
            box-shadow: none;
        }
    `,
    dropdownOptions: css`
        background-color: rgba(0, 0, 0, 0.65);
        color: #dbdbdb;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    `,
    launcherInfoContainer: css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #dbdbdb;
    `,
    launcherSummary: css`
        display: flex;
        justify-content: space-between;
        padding-bottom: 6px;
    `,
    taxSummary: css`
        display: flex;
        justify-content: space-between;
        padding-bottom: 6px;
        border-bottom: 2px solid #dbdbdb; 
    `,
    totalSummary: css`
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    `,
    paymentContainer: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-left: 100px;
        background-color: #1e1e1e;
        padding-bottom: 10px;
    `,
    paymentSummary: css`
        padding-top: 25px;
        margin-right: 10px;
        width: 50%;
        background-color: #1e1e1e;
    `,
    price: css`
        padding-left: 10px;
    `,
}

export default PaymentSummary;