import React, { useEffect, useState } from 'react';
import { MovieItem, IMoviesItemType } from '../movie-item/movie-item';
import './movies-list.css';

export const MoviesList = () => {
    const [movies, setMovies] = useState<IMoviesItemType[]>([]);

    useEffect(() => {
        fetch(`https://devlab.website/v1/movies`)
            .then(response => response.json())
            .then(response => {
                const data = response;
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
