import React from 'react';
import 'normalize.css';
import { MoviesList } from './componetns/movies-list/movies-list';
import { Header } from './componetns/header/header';
import { Footer } from './componetns/footer/footer';
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
