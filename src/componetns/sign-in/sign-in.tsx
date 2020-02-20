import React, { useState } from 'react';
import { Container, Modal, Title, WrappedContent, Text, Input, WrappedFooter, Link, Button } from './styled';

export const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
                    <Input
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
                    />
                </WrappedContent>
                <WrappedFooter>
                    <Link href={`#`}>Oops, I forget my password!</Link>
                    <div>
                        <Link href={`#`}>Cancel</Link>
                        <Button>Sign In</Button>
                    </div>
                </WrappedFooter>
            </Modal>
        </Container>
    );
};
