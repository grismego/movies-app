import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.logo}>
                    MOViER+
                </Link>
                <Search />
                <User />
            </div>
        </header>
    );
};
