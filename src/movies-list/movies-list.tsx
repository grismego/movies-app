import React from 'react';
import { IProps, MovieItem } from '../movie-item/movie-item';
import './movies-list.css';

export const MoviesList = (props: IProps[]) => {
    return (
        <section className='wrapper'>
            {Object.keys(props).map((_, index) => {
                return <MovieItem {...props[index]} key={props[index].id} />;
            })}
        </section>
    );
};
