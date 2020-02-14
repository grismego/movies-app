import { addMovies, getUser } from './actions';
import { all, fork, put, call, delay, takeEvery } from 'redux-saga/effects';
import { ApiService } from '../api/api';

const AUTHORIZATION = `SWFtQWxleGV5OTU6c2YyWUNIS2lmTQ==`;
const END_POINT = `https://devlab.website/v1`;

const api = new ApiService({
    endPoint: END_POINT,
    authorization: AUTHORIZATION,
});

function fetchData() {
    return api.getMovies();
}

function fetchUser() {
    return api.getUser();
}

function* appFetchSaga() {
    const data = yield call(fetchData);
    const user = yield call(fetchUser);
    yield put(getUser(user));
    yield put(addMovies(data));
}

export function* rootSaga() {
    yield all([fork(appFetchSaga)]);
}
