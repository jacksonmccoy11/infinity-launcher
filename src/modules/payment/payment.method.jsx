import React from 'react';
import { css } from '@emotion/css';
import './payment.method.css';

const PaymentSummary = () => {

    const displayStateDropdown = () => {
        return <select className={styles.dropdown}>
            <option className={styles.dropdownOptions} value={0}>NE</option>
        </select>;
    };

    const displayCountryDropdown = () => {
        return <select className={styles.dropdown}>
            <option className={styles.dropdownOptions} value={0}>United States</option>
        </select>;
    };

    const displayPaymentType = () => {
        return <select className={styles.dropdown}>
            <option className={styles.dropdownOptions} value={0}>PayPal</option>
            <option className={styles.dropdownOptions} value={1}>Visa</option>
            <option className={styles.dropdownOptions} value={2}>MasterCard</option>
            <option className={styles.dropdownOptions} value={3}>American Express</option>
            <option className={styles.dropdownOptions} value={4}>Discovery</option>
        </select>;
    };

    return <div className={styles.paymentMethodContainer}>
        <div className={styles.paymentMethodTitle}>
            Payment Method
        </div>
        <div className={styles.paymentInfo}>
            <div className={styles.paymentLeft}>
                {displayPaymentType()}
                <div>
                    <input className={styles.cardNumber} type='number' placeholder='Card Number' />
                </div>
            </div>
            <div className={styles.paymentRight}>
                <div>
                    <input className={styles.rightCardInfo} type='text' placeholder='MM/YY' />
                    <input className={styles.rightCardInfo} type='number' placeholder='XXX' />
                </div>
            </div>
        </div>
        <div className={styles.billingTitle}>
            Billing Information
        </div>
        <div className={styles.billingInfo}>
            <div className={styles.paymentLeft}>
                <div>
                    <input className={styles.nameInput} type='text' placeholder='First Name' />
                    <input className={styles.lastNameInput} type='text' placeholder='Last Name' />
                </div>
                <div>
                    <input className={styles.billingInput} type='text' placeholder='Address' />
                </div>
                <div>
                    <input className={styles.billingInput} type='text' placeholder='Address #2' />
                </div>
                <div style={{marginTop: '15px'}}>
                    {displayCountryDropdown()}
                </div>
            </div>
            <div className={styles.paymentRight}>
                <div>
                    <input type='text' placeholder='City' />
                </div>
                <div style={{marginTop: '15px'}}>
                    {displayStateDropdown()}
                </div>
                <div>
                    <input className={styles.billingInput} type='text' placeholder='Zip or postal Code' />
                </div>
                <div>
                    <input className={styles.billingInput} type='text' placeholder='Phone number' />
                </div>
            </div>
        </div>
        <button className={styles.purchaseButton} onClick={() => alert('Congrats on the new game!')}>Purchase</button>
    </div>;
};

const styles = {
    purchaseButton: css`
        margin-top: 20px;
        width: 120px;
        height: 35px;
        background-color: blue;
        color: #ededed;
        border: 2px solid black;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        &:hover { opacity: 75% }
        &:focus {
            outline: none;
            box-shadow: none;
        }
    `,
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
        width: 200px;
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
    cardNumber: css`
        margin-top: 20px; 
    `,
    billingInput: css`
        margin-top: 20px; 
    `,
    rightCardInfo: css`
        margin-top: 55px;
        margin-left: 10px;
        width: 100px;
        text-align: right;
    `,
    nameInput: css`
        width: 100px;
    `,
    lastNameInput: css`
        width: 100px;
        margin-left: 10px;
    `,
    paymentMethodContainer: css`
        margin-top: 60px;
        width: 100%;
        margin-left: 50px;
    `,
    paymentMethodTitle: css`
        font-size: 26px;
    `,
    billingTitle: css`
        margin-top: 40px;
        font-size: 26px;
    `,
    paymentInfo: css`
        display: flex;
        padding-top: 10px;
    `,
    billingInfo: css`
        display: flex;
        margin-top: 10px;
    `,
    paymentLeft: css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    `,
    paymentRight: css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    `,
}

export default PaymentSummary;