import React from 'react';
import { MovieItem } from '../movie-item/movie-item';
import { useSelector } from 'react-redux';
import { selectDesiredMovies } from '../../reducers/selectors';
import './movies-list.css';

export const MoviesList = () => {
    const allMovies = useSelector(selectDesiredMovies);
    return (
        <section className='wrapper'>
            {allMovies && allMovies.map((movie: MovieItem) => <MovieItem {...movie} key={movie.id} />)}
        </section>
    );
};
