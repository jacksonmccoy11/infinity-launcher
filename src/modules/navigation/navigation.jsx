import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../media/infinity-logo-icon.png';
import history from '../redux/history';
import space from '../../media/space.jpg'

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
        key: 'community',
        displayName: 'Community'
    },
    {
        key: 'roadmap',
        displayName: 'Roadmap'
    },
    {
        key: 'contact',
        displayName: 'Contact Us'
    }
];

const CustomLink = React.forwardRef(({href, onClick, component, children}, ref) => (    
    <div className={styles.linkContainer}>
        <a ref={ref} className={styles.link} href={href} onClick={onClick} component={component}>{children}</a>
    </div>
));

const Navigation = () => {
    const { pathname } = useLocation();
    const [ selectedPage, setSelectedPage ] = useState();

    useEffect(() => {
        const currentPage = pathname.split('/');

        setSelectedPage(currentPage[1]);
    }, [pathname]);

    const onPageClick = page => {
        setSelectedPage(page);
    };

    const toHome = () => {
        history.push('/home');
    };

    return <div className={styles.navigationBar}>
        <div className={styles.logoContainer} onClick={toHome}>
            <img src={logo} alt='Infinity Logo' width='70' height='70' />
        </div>
        <div className={styles.navigationButtons}>
            {PAGES.map(page => {
                return <div className={styles.navigationButton} key={page.key}>
                    <Link
                        to={`/${page.key}`}
                        onClick={() => onPageClick(page.key)}
                        component={CustomLink}>
                            {page.displayName}
                    </Link>
                    {selectedPage === page.key && <span className={styles.selectedBar} />}
                </div>
            })}
        </div>
        <input className={styles.input} type='text' placeholder='Search...' />
    </div>;
};

const styles = {
    input: css`
        right: 5px;
        position: absolute;
        align-self: center;
        margin-right: 10px;
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-radius: 6px;
        padding: 6px;
    `,
    link: css `
        color: white;
        text-decoration: none;
        text-shadow: 
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    `,
    linkContainer: css`
        display: flex;
        flex-direction: column;
    `,
    logoContainer: css`
        margin-right: 10px;
        cursor:pointer;
    `,
    navigationBar: css`
        background-color: #222222;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        position: fixed;
        top: 0;
        width: 100%;
        border-bottom: 2px solid black;
        background-image: url(${space});
        background-size: cover;
    `,
    navigationButton: css `
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 14px;
        margin-right: 14px;
    `,
    navigationButtons: css `
        height: 74px;
        font-size: 24px;
        display: flex;
        flex-direction: row;
    `,
    selectedBar: css `
        position: absolute;
        margin-bottom: 4px;
        border: 1px solid #0026ff;
        border-radius: 6px;
        bottom: 0;
        width: 100%;
    `
};

export default Navigation;