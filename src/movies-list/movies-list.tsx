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

    // const memo = useMemo(() => {
    //     return <MovieItem />
    // }, moviesList);

    // const memoTest = useMemo(() => {
    //     return moviesList.map((movie: any) => <MovieItem {...movie} key={movie.id} />);
    // }, [moviesList]);

    // const createChild = (movie: IMoviesItemType) => <MovieItem {...movie} key={movie.id} />;

    return (
        <>
            <section className='wrapper'>
                {moviesList.map((movie: any) => (
                    <MovieItem {...movie} key={movie.id} />
                ))}
            </section>
        </>
    );
};
