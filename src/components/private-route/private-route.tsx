import React from 'react';

import { Route } from 'react-router-dom';

export const PrivateRouter = ({
    path,
    predicate,
    valueToBeChecked,
    SuccessRoute,
    FailureRoute,
}: PrivateRoutePropsT) => {
    return (
        <Route exact path={path}>
            {predicate(valueToBeChecked) ? <SuccessRoute /> : <FailureRoute />}
        </Route>
    );
};
