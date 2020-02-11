import { addMovies } from './actions';
import { MOVIES_URL } from './../constants';
import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects';

function fetchData() {
    return fetch(`${MOVIES_URL}/movies`).then(response => response.json());
}

function* appFetchSaga() {
    const data = yield call(fetchData);

    yield put(addMovies(data));
}

export function* rootSaga() {
    yield all([fork(appFetchSaga)]);
}
