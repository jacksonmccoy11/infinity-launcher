import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../media/infinity-logo-icon.png';
import history from '../redux/history';

const PAGES = [
    {
        key: 'store',
        displayName: 'Store'
    },
    {
        key: 'community',
        displayName: 'Community'
    },
    {
        key: 'roadmap',
        displayName: 'Roadmap'
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
    const [ selectedPage, setSelectedPage ] = useState();

    useEffect(() => {
        const currentPage = pathname.split('/');

        setSelectedPage(currentPage[1]);
    }, [pathname])

    const onPageClick = page => {
        setSelectedPage(page);
    };

    const toHome = () => {
        history.push('/home');
    };

    return <div className={styles.navigationBar}>
        <div className={styles.logoContainer} onClick={toHome}>
            <img src={logo} alt='Infinity Logo' width='80' height='80' />
        </div>
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
    logoContainer: css`
        margin-right: 10px;
    `,
    navigationBar: css`
        background-color: rgba(0, 0, 0, 0.45);;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,
    navigationButtons: css `
        align-self: center;
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