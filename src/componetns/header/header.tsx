import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>MOViER+</div>
                <Search />
                <User />
            </div>
        </header>
    );
};
