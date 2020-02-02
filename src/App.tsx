import React from 'react';
import 'normalize.css';
import { MoviesList } from './movies-list/movies-list';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import './index.css';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <MoviesList />
            <Footer />
        </>
    );
};

export default App;
