import React from 'react';
import 'normalize.css';
import { MoviesList } from './components/movies-list/movies-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { UserPage } from './components/user-page/user-page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import { MovieItemPage } from './components/movie-item-page/movie-item-page';
import { BaseLayout } from './components/layout/layout';
import { Login } from './components/login/login';
import { NotFound } from './components/not-found/not-found';
import { PrivateRouter } from './components/private-route/private-route';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <BaseLayout>
                <Switch>
                    <Route exact path='/' component={MoviesList} />
                    <Route exact path='/movie/:id' component={MovieItemPage} />
                    <Route path='/login' component={Login} />
                    <PrivateRouter
                        path='/user'
                        predicate={arg => arg}
                        valueToBeChecked={localStorage.getItem('isAuth')}
                        SuccessRoute={() => <UserPage />}
                        FailureRoute={() => <NotFound />}
                    />
                    <Route path='*' component={NotFound}></Route>
                </Switch>
            </BaseLayout>
            <Footer />
        </Router>
    );
};

export default App;
