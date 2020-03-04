import React, { useState, useEffect } from 'react';
import { Container, Modal, Title, WrappedContent, Text, Input, WrappedFooter, Link, Button } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../reducers/actions';
import { useHistory } from 'react-router-dom';

export const Login = (props: any) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    let history = useHistory();

    const isAuth = useSelector((state: RootStore) => state.isAuth);

    useEffect(() => {
        isAuth && history.push('/user');
    }, [isAuth]);

    return (
        <Container>
            <Modal>
                <WrappedContent>
                    <Title>Welcome Back</Title>
                    <Text>It' been too long! Enter your username and password and comeback to us!</Text>
                    <Input
                        type='text'
                        value={login}
                        placeholder='UserName'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setLogin(evt.target.value)}
                    />
                    <p>IamAlexey95</p>
                    <Input
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
                    />
                    <p>sf2YCHKifM</p>
                </WrappedContent>
                <WrappedFooter>
                    <Link href={`#`}>Oops, I forget my password!</Link>
                    <div>
                        <Link href={`#`} onClick={() => history.push(`/`)}>
                            Cancel
                        </Link>
                        <Button
                            onClick={() => {
                                dispatch(logIn(login, password));
                            }}
                        >
                            Sign In
                        </Button>
                    </div>
                </WrappedFooter>
            </Modal>
        </Container>
    );
};
