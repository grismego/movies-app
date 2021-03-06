import React from 'react';
import { useSelector } from 'react-redux';
import styles from './user.module.css';
import { Link } from 'react-router-dom';
import placeholder from '../user-page/placeholder.png';
import { selectedUser } from '../../reducers/selectors';
import { UserName } from './styled';

export const User = () => {
    const user = useSelector(selectedUser);
    const { avatar } = user;

    return (
        <div className={styles.container}>
            <img
                src={avatar ? `https://devlab.website/${avatar}` : placeholder}
                alt='avatar'
                className={styles.avatar}
            />
            <Link to='/user'>
                <UserName>{user && user.login}</UserName>
            </Link>
        </div>
    );
};
