import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const user = useSelector((state: RootStore) => state.user);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.logo}>
                    MOViER+
                </Link>
                <Search />
                {user.isAuth ? <User /> : <Link to='/sign-in'>Sign in</Link>}
            </div>
        </header>
    );
};
