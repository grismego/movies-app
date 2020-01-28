import React, { useEffect, useState, useCallback } from 'react';
import { MovieItem, IMoviesItemType } from '../movie-item/movie-item';
import './movies-list.css';
import { MOVIES_URL } from './../constants';
import { generateMoviePoster } from './../utils';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getMovies } from './../reducers/actions';

// dispath(getMovies);

// const get = () => {
//     dispath(getMovies(movies));
// };

function addFimns(array: []) {
    return { type: 'ADD_FILM', payload: array };
}

export const MoviesList = () => {
    // const [movies, setMovies] = useState<IMoviesItemType[]>([]);

    // const get = (movies: []) => dispatch(getMovies(movies));

    // const films = useSelector<RootStore, ListElement[]>(state => state.list);
    // const dispatch = useDispatch();

    // const getFilms = useCallback(() => dispatch(getMovies(films)), [dispatch]);

    // const content = useSelector(state => state);

    // const dispatch = useDispatch();

    const store = useStore();

    const films = useSelector((state: any) => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(response => response.json())
            .then(response => {
                dispatch(addFimns(response));
                // console.log()
                // dispatch({
                //     type: 'GET_MOVIES',
                //     data: response,
                // });
                // // setMovies(
                // //     response.map((movie: { poster_path: string }) => {
                // //         movie[`poster_path`] =
                // //             movie[`poster_path`].length > 0 ? movie[`poster_path`] : generateMoviePoster();
                // //         return movie;
                // //     })
                // // );
                // // const a = useCallback(() => dispatch(getMovies(response)), [dispatch]);
                // get(response);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    console.log(films);

    return (
        <section className='wrapper'>
            {films.map((movie: any) => (
                <MovieItem {...movie} key={movie.id} />
            ))}
        </section>
    );
};
