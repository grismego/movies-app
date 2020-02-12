import { addMovies } from './actions';
import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects';
import { api } from '../api/api';

function fetchData() {
    return api.getData('/v1/movies');
}

function* appFetchSaga() {
    const data = yield call(fetchData);

    yield put(addMovies(data));
}

export function* rootSaga() {
    yield all([fork(appFetchSaga)]);
}
