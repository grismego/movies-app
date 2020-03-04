import React from 'react';
import { ContentWrapper } from './styled';
// import styles from './content.module.css';

export const Content = (props: any) => {
    return <ContentWrapper>{props.children}</ContentWrapper>;
};
