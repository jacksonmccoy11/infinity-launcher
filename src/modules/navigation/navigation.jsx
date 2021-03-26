import React, { useState } from 'react';
import { css } from '@emotion/css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../media/infinity-logo-icon.png';

const PAGES = [
    {
        key: 'home',
        displayName: 'Home'
    },
    {
        key: 'store',
        displayName: 'Store'
    },
    {
        key: 'contact',
        displayName: 'Contact'
    }
];

const CustomLink = React.forwardRef((props, ref) => (    
    <div className={styles.linkContainer}>
        <a ref={ref} className={styles.link} {...props}>{props.children}</a>
        {props.isSelected && <span className={styles.selectedBar} />}
    </div>
));

const Navigation = () => {
    const { pathname } = useLocation();
    const currentPage = pathname.split('/');
    const [ selectedPage, setSelectedPage ] = useState(currentPage[1]);

    const onPageClick = page => {
        setSelectedPage(page);
    };

    return <div className={styles.navigationBar}>
        <img src={logo} alt='Infinity Logo' width='120' height='120' />
        <div className={styles.navigationButtons}>
            {PAGES.map(page => {
                return <Link to={`/${page.key}`} onClick={() => onPageClick(page.key)} isSelected={selectedPage === page.key} component={CustomLink}>{page.displayName}</Link>
            })}
        </div>
    </div>;
};

const styles = {
    link: css `
        color: white;
        text-decoration: none;
        padding: 14px;
    `,
    linkContainer: css`
        display: flex;
        flex-direction: column;
    `,
    navigationBar: css`
        background-color: rgba(0, 0, 0, 0.45);;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
    `,
    navigationButtons: css `
        align-self: flex-end;
        font-size: 24px;
        display: flex;
        flex-direction: row;    
    `,
    selectedBar: css `
        margin-left: 14px;
        margin-right: 14px;
        margin-bottom: 4px;
        flex-grow: 1;
        height: 3px;
        background-color: blue;
    `
};

export default Navigation;