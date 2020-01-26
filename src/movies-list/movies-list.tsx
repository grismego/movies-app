import React, { useEffect, useState } from 'react';
import { MovieItem, IMoviesItemType } from '../movie-item/movie-item';
import './movies-list.css';
import { MOVIES_URL } from './../constants';
import { generateMoviePoster } from './../utils';

export const MoviesList = () => {
    const [movies, setMovies] = useState<IMoviesItemType[]>([]);

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(response => response.json())
            .then(response => {
                const data = response.map((movie: { poster_path: string }) => {
                    movie[`poster_path`] =
                        movie[`poster_path`].length > 0 ? movie[`poster_path`] : generateMoviePoster();
                    return movie;
                });
                setMovies(data);
            });
    }, []);

    return (
        <section className='wrapper'>
            {movies.map(movie => (
                <MovieItem {...movie} key={movie.id} />
            ))}
        </section>
    );
};
