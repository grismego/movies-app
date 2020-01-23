import React, { useEffect, useState } from 'react';
import { MovieItem, IMoviesItemType } from '../movie-item/movie-item';
import axios from 'axios';
import './movies-list.css';

export const MoviesList = () => {
    const [movies, setMovies] = useState<IMoviesItemType[]>([]);

    useEffect(() => {
        /*
            TODO:
            Вынести axios в отдельный файл / функцию   
        */
        axios.get(`http://localhost:3000/movies.json`).then(response => {
            const data = response.data;
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
