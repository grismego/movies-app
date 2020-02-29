import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Spinner } from '../spinner/spinner';
import { addingUserInfo } from '../../reducers/actions';
import { selectFavoriteMovies } from '../../reducers/selectors';
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

export const UserPage = (props: any) => {
    const user = useSelector((state: RootStore) => state.user);

    const dispatch = useDispatch();

    const { bio, name, avatar } = user;

    const [userName, setUserName] = useState('');
    const [userBio, setUserBio] = useState('');

    useEffect(() => {
        setUserName(name);
        setUserBio(bio);
    }, [bio, name, avatar]);

    // const [userInfo, setUserInfo] = useState({
    //     bio,
    //     name,
    //     avatar
    // })

    // const [state, setState] = useState(() => {
    //     const initialState = someExpensiveComputation(props);
    //     return initialState;
    //   });

    // const [userName, setUserName] = useState(() => {
    //     return name;
    // });

    const movies = useSelector(selectFavoriteMovies);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.target);
        dispatch(addingUserInfo(data));
    };

    return user ? (
        <section>
            <div className='container'>
                <h1>My Profile</h1>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <WrapperImg>
                            <Img src={avatar ? `https://devlab.website/${avatar}` : placeholder} alt='' />
                            <LabelInputFile htmlFor='file'>
                                Choose File
                                <InputFile type='file' id='file' name='avatar' />
                            </LabelInputFile>
                        </WrapperImg>
                        <UserInfo>
                            <UserInfoHeader>
                                <span>userName:</span> <span>{user.login}</span>
                            </UserInfoHeader>
                            <UserName>
                                <span>Name: </span>
                                <input
                                    value={userName}
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
                                    value={userBio}
                                    onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
                                        setUserBio(evt.target.value)
                                    }
                                />
                            </UserBio>
                            <ButtonBlock>
                                <button>cancel</button>
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
