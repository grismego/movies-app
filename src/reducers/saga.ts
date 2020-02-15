import { LIKE_FILM, UNLIKE_FILM } from './actions-types';
import { addMovies, getUser } from './actions';
import { all, fork, put, call, takeLatest, delay, takeEvery } from 'redux-saga/effects';
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

function addLike(id: number) {
    return api.addLike(id);
}

function removeLike(id: number) {
    return api.removeLike(id);
}

function* Like(action: any) {
    yield call(addLike, action.payload);
}

function* UnLike(action: any) {
    yield call(removeLike, action.payload);
}

function* appFetchSaga() {
    const data = yield call(fetchData);
    const user = yield call(fetchUser);
    yield put(getUser(user));
    yield put(addMovies(data));
}

export function* rootSaga() {
    yield takeEvery(LIKE_FILM, Like);
    yield takeEvery(UNLIKE_FILM, UnLike);
    yield all([fork(appFetchSaga)]);
}
