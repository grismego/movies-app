import React from 'react';
import { Title, Img, Wrapper } from './styled';
import logo from './404.png';

export const NotFound = () => {
    return (
        <Wrapper>
            <Title>404</Title>
            <Img src={logo} alt='' />
        </Wrapper>
    );
};
