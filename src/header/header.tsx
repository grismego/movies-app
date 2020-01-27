import React from 'react';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>тут logo</div>
            <div>
                <ul className={styles.list}>
                    <li>фильтр1</li>
                    <li>фильтр2</li>
                    <li>фильтр3</li>
                </ul>
            </div>
        </header>
    );
};
