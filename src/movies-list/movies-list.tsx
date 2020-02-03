import React, { useEffect, useMemo } from 'react';
import { MovieItem } from '../movie-item/movie-item';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './../reducers/actions';
import { MOVIES_URL } from './../constants';
import './movies-list.css';
import { addingFavoriteKey } from '../reducers/page/selectors';

export const MoviesList = () => {
    const moviesList = useSelector((state: { page: { movies: [] } }) => state.page.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${MOVIES_URL}/movies`)
            .then(response => response.json())
            .then(response => {
                const moviesWithKey = addingFavoriteKey(response);
                dispatch(getMovies(moviesWithKey));
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <section className='wrapper'>
                {moviesList.map((movie: MovieItem) => (
                    <MovieItem {...movie} key={movie.id} />
                ))}
            </section>
        </>
    );
};
