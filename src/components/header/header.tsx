import React from 'react';
import styles from './header.module.css';
import { Search } from '../search/search';
import { User } from '../user/user';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderWrapper, TopMenu, Wrapper } from './styled';
import { ThemeToggler } from '../theme-toggler/theme-toggler';

export const Header = () => {
    const isAuth = useSelector((state: RootStore) => state.isAuth);

    return (
        <HeaderWrapper>
            <TopMenu>
                <ThemeToggler />
            </TopMenu>
            <Wrapper>
                <Link to='/' className={styles.logo}>
                    MOViER+
                </Link>
                <Search />
                {isAuth ? <User /> : <Link to='/login'>Log in</Link>}
            </Wrapper>
        </HeaderWrapper>
    );
};
