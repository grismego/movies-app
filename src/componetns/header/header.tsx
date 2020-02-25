import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const isAuth = useSelector((state: RootStore) => state.isAuth);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.logo}>
                    MOViER+
                </Link>
                <Search />
                {isAuth ? <User /> : <Link to='/sign-in'>Sign in</Link>}
            </div>
        </header>
    );
};
