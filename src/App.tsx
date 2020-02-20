import React from 'react';
import 'normalize.css';
import { MoviesList } from './componetns/movies-list/movies-list';
import { Header } from './componetns/header/header';
import { Footer } from './componetns/footer/footer';
import { UserPage } from './componetns/user-page/user-page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import { MovieItemPage } from './componetns/movie-item-page/movie-item-page';
import { BaseLayout } from './componetns/layout/layout';
import { SignIn } from './componetns/sign-in/sign-in';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <BaseLayout>
                <Switch>
                    <Route exact path='/' component={MoviesList} />
                    <Route exact path='/movie/:id' component={MovieItemPage} />
                    <Route exact path='/user' component={UserPage} />
                    <Route path='/some' component={SignIn} />
                    <Route path='*'>{`No`}</Route>
                </Switch>
            </BaseLayout>
            <Footer />
        </Router>
    );
};

export default App;
