import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import { rootSaga } from './reducers/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware), composeWithDevTools()));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
