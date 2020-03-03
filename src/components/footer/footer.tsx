import React from 'react';
import style from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <a href='/'>Privacy Policy</a>
            <p>© 2010-2020 by Movier-plus.com, Inc.</p>
        </footer>
    );
};
