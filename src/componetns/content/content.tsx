import React from 'react';
import styles from './content.module.css';

export const Content = (props: any) => {
    return <section className={styles.main}>{props.children}</section>;
};
