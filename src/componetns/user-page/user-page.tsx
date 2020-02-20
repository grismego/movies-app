import React from 'react';
import { useSelector } from 'react-redux';

import { Spinner } from '../spinner/spinner';

export const UserPage = () => {
    const user = useSelector((state: RootStore) => state.user);

    return user ? (
        <section>
            <div className='container'>
                <h1>My Profile</h1>
                <div className='content'>
                    <div className='userImage'>
                        <img src={''} alt='' />
                    </div>
                    <div className='userInfo'>
                        <div>userName: {user.login}</div>
                        <div>Name:</div>
                        <div>Bio</div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <Spinner />
    );
};
