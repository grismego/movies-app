import React from 'react';
// import './spinner.css';
import style from './spinner.module.css';

export const Spinner = () => {
    return (
        <div className={style.container}>
            <div className={style.containerBox}>
                <div className={style.box}>
                    <div className={style.spinner}></div>
                </div>
            </div>
        </div>
    );
};
