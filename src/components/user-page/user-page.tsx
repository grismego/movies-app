import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Spinner } from '../spinner/spinner';
import { addingUserInfo } from '../../reducers/actions';
import { selectFavoriteMovies, selectedUser } from '../../reducers/selectors';
import {
    WrapperImg,
    Img,
    ButtonBlock,
    UserBio,
    Container,
    UserInfo,
    UserName,
    UserInfoHeader,
    List,
    Title,
    InputFile,
    LabelInputFile,
} from './styled';
import placeholder from './placeholder.png';
import { MovieItem } from '../movie-item/movie-item';

export const UserPage = () => {
    const user = useSelector(selectedUser);

    const dispatch = useDispatch();

    const { bio, name, avatar } = user;

    const [userName, setUserName] = useState('');
    const [userBio, setUserBio] = useState('');

    const [avatarImg, setAvatar] = useState(``);

    const refImg = useRef<any>();

    useEffect(() => {
        setUserName(name);
        setUserBio(bio);
        setAvatar(avatar);
    }, [bio, name, avatar]);

    const movies = useSelector(selectFavoriteMovies);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.target);
        dispatch(addingUserInfo(data));
    };

    const handleChangeAvatar = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                const img = refImg.current;
                img.src = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return user ? (
        <section>
            <div className='container'>
                <h1>My Profile</h1>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <WrapperImg>
                            <Img src={avatarImg ? `https://devlab.website/${avatarImg}` : placeholder} ref={refImg} />
                            <LabelInputFile htmlFor='file'>
                                Choose File
                                <InputFile onChange={handleChangeAvatar} type='file' id='file' name='avatar' />
                            </LabelInputFile>
                        </WrapperImg>
                        <UserInfo>
                            <UserInfoHeader>
                                <span>userName:</span> <span>{user.login}</span>
                            </UserInfoHeader>
                            <UserName>
                                <span>Name: </span>
                                <input
                                    value={userName || ''}
                                    type='text'
                                    name='name'
                                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                                        setUserName(evt.target.value)
                                    }
                                />
                            </UserName>
                            <UserBio>
                                <span> Bio:</span>
                                <textarea
                                    name='bio'
                                    value={userBio || ''}
                                    onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
                                        setUserBio(evt.target.value)
                                    }
                                />
                            </UserBio>
                            <ButtonBlock>
                                <button onClick={e => e.preventDefault()}>cancel</button>
                                <button type='submit'>save</button>
                            </ButtonBlock>
                        </UserInfo>
                    </form>
                    <Title>Your favorites. You added {movies.length} movies</Title>
                    <List>{movies && movies.map((movie: MovieItem) => <MovieItem {...movie} key={movie.id} />)}</List>
                </Container>
            </div>
        </section>
    ) : (
        <Spinner />
    );
};
