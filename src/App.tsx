import React, { useState, useEffect } from 'react';
// import data from './mock/movies.json';
import axios from 'axios';
import { MoviesList } from './movies-list/movies-list';

const App: React.FC = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/movies.json`).then(response => {
            const data = response.data;

            setMovies(data);
        });
    });

    return <MoviesList movies={movies} />;
};

export default App;
