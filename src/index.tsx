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
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware), composeWithDevTools()));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
