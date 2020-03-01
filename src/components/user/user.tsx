import React from 'react';
import { useSelector } from 'react-redux';
import styles from './user.module.css';
import { Link } from 'react-router-dom';
import placeholder from '../user-page/placeholder.png';

export const User = () => {
    const user = useSelector((state: RootStore) => state.user);

    console.log(user);
    const { avatar } = user;

    return (
        <div className={styles.container}>
            <img
                src={avatar ? `https://devlab.website/${avatar}` : placeholder}
                // src={`${user.avatar} || https://devlab.website/upload/movie/student13_cd6bfcb12aacab488ef2baa616474e9a.jpg`}
                alt='avatar'
                className={styles.avatar}
            />
            <Link to='/user'>
                <span className={styles.name}>{user && user.login}</span>
            </Link>
        </div>
    );
};
