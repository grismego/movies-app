import React from 'react';
import { Button } from './styled';

type ButtonElementT = {
    primary: boolean;
};

export const ButtonElem = (props: any) => {
    return <Button {...props}>{props.children}</Button>;
};
