import React from 'react';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>MOViER+</div>
            <div className={styles.search}>
                <div>all</div>
                <input type='text' placeholder='Search Movier+' />
                <button>search</button>
            </div>
            <div>
                <img src='' alt='' />
                <span>User Name</span>
            </div>
            {/* <div>
                <ul className={styles.list}>
                    <li>фильтр1</li>
                    <li>фильтр2</li>
                    <li>фильтр3</li>
                </ul>
            </div> */}
        </header>
    );
};
