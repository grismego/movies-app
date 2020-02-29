import React from 'react';
import 'normalize.css';
import { MoviesList } from './components/movies-list/movies-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
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
