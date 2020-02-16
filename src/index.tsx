import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/reducer';
import logger from 'redux-logger';

import App from './App';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, compose(applyMiddleware(logger), composeEnhancers()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
