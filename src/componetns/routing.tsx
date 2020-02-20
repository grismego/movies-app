import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from './content/content';
import { MoviesList } from './movies-list/movies-list';
import { MovieItemPage } from './movie-item-page/movie-item-page';
import { UserPage } from './user-page/user-page';
import { BaseLayout } from './layout/layout';

export const Routing = () => {
    return (
        <BaseLayout>
            <Route exact path='/' component={MoviesList} />
            <Switch>
                <Route exact path='/movie/:id' component={MovieItemPage} />
                <Route exact path='/user' component={UserPage} />
                {/* <Route path='*'>{`No found`}</Route> */}
                {/* <MoviesList /> */}
            </Switch>
        </BaseLayout>
    );
};
