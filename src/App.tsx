import React from 'react';
import data from './mock/movies.json';
import { MoviesList } from './movies-list/movies-list';

const App: React.FC = () => {
    return <MoviesList {...data} />;
};

export default App;
