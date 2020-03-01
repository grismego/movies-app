import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderWrapper } from './styled';

export const Header = () => {
    const isAuth = useSelector((state: RootStore) => state.isAuth);

    return (
        <HeaderWrapper className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.logo}>
                    MOViER+
                </Link>
                <Search />
                {isAuth ? <User /> : <Link to='/login'>Log in</Link>}
            </div>
        </HeaderWrapper>
    );
};
