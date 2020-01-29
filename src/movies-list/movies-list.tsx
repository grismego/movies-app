import React, { useEffect } from 'react';
import { MovieItem } from '../movie-item/movie-item';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './../reducers/actions';
import { MOVIES_URL } from './../constants';
import './movies-list.css';

export const MoviesList = () => {
    const films = useSelector((state: { page: { films: [] } }) => state.page.films);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${MOVIES_URL}/movies`)
            .then(response => response.json())
            .then(response => {
                dispatch(getMovies(response));
            })
            .catch(err => {
                console.error(err);
            });
        /* не понимаю что поставить в квадратные скобки. диспатч? */
    }, [dispatch]);

    return (
        <section className='wrapper'>
            {films.map((movie: any) => (
                <MovieItem {...movie} key={movie.id} />
            ))}
        </section>
    );
};
