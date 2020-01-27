import React from 'react';
import { MoviesList } from './movies-list/movies-list';
import { Header } from './header/header';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <MoviesList />
        </>
    );
};

export default App;
