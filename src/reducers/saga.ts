import { LIKE_FILM, UNLIKE_FILM, LOG_IN } from './actions-types';
import { addMovies, getUser, logInSucces, logInFailed } from './actions';
import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import { ApiService } from '../api/api';
import { BASE_URL } from '../constants';

const api = new ApiService({
    endPoint: BASE_URL,
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
    yield put(addMovies(data));
    if (localStorage.getItem('isAuth')) {
        const user = yield call(fetchUser);
        yield put(getUser(user));
    }
}

function* signIn() {
    try {
        const user = yield call(fetchUser);
        yield put(getUser(user));
        yield put(logInSucces());
        localStorage.setItem('isAuth', 'true');
    } catch (e) {
        yield put(logInFailed());
    }
}

export function* rootSaga() {
    yield takeEvery(LIKE_FILM, Like);
    yield takeEvery(UNLIKE_FILM, UnLike);

    yield takeEvery(LOG_IN, signIn);

    yield all([fork(appFetchSaga)]);
}
