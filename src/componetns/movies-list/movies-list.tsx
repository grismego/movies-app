import React, { useEffect } from 'react';
import { MovieItem } from '../movie-item/movie-item';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../../reducers/actions';
import { MOVIES_URL } from '../../constants';
import { selectDesiredMovies } from '../../reducers/selectors';
import './movies-list.css';

export const MoviesList = () => {
    const allMovies = useSelector(selectDesiredMovies);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // fetch(`${MOVIES_URL}/movies`)
    //     //     .then(response => response.json())
    //     //     .then(response => {
    //     //         dispatch(addMovies(response));
    //     //     })
    //     //     .catch(err => {
    //     //         console.error(err);
    //     //     });
    // }, []);

    return (
        <>
            <section className='wrapper'>
                {allMovies.map((movie: MovieItem) => (
                    <MovieItem {...movie} key={movie.id} />
                ))}
            </section>
        </>
    );
};
