import React, { useEffect, useState } from 'react';
import { IProps, MovieItem } from '../movie-item/movie-item';
import './movies-list.css';

export const MoviesList = (props: { movies: IProps[] }) => {
    // const [movies, setMovies] = useState();

    // useEffect(() => {
    //     axios.get(`http://localhost:3000/movies.json`).then(response => {
    //         const data = response.data;

    //         setMovies(data);
    //     });
    // });

    const { movies } = props;
    return (
        <section className='wrapper'>
            {movies.map(movie => (
                <MovieItem {...movie} key={movie.id} />
            ))}
        </section>
    );
};
