import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Spinner } from '../spinner/spinner';

import { WrapperImg, Img, ButtonBlock, UserBio, Container, UserInfo, UserName, UserInfoHeader } from './styled';

export const UserPage = () => {
    const user = useSelector((state: RootStore) => state.user);

    const { bio, name } = user;

    const [userName, setUserName] = useState(name || '');

    const [userBio, setUserBio] = useState(bio);

    return user ? (
        <section>
            <div className='container'>
                <h1>My Profile</h1>
                <Container>
                    <WrapperImg>
                        <Img
                            src='https://devlab.website/upload/movie/student13_cd6bfcb12aacab488ef2baa616474e9a.jpg'
                            alt=''
                        />
                    </WrapperImg>
                    <UserInfo>
                        <UserInfoHeader>
                            <span>userName:</span> <span>{user.login}</span>
                        </UserInfoHeader>
                        <UserName>
                            <span>Name:</span>
                            <input
                                value={userName}
                                type='text'
                                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setUserName(evt.target.value)}
                            />
                        </UserName>
                        <UserBio>
                            <span> Bio:</span>{' '}
                            <textarea
                                value={userBio}
                                onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => setUserBio(evt.target.value)}
                            />
                        </UserBio>
                        <ButtonBlock>
                            <button>cancel</button>
                            <button>save</button>
                        </ButtonBlock>
                    </UserInfo>
                </Container>
            </div>
        </section>
    ) : (
        <Spinner />
    );
};
