import { LIKE_FILM, UNLIKE_FILM, LOG_IN, ADD_USER_INFO } from './actions-types';
import { addMovies, getUser, logInSucces, logInFailed } from './actions';
import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import { fetchData, fetchUser, addLike, removeLike, postUserInfo } from './utils';

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

function* postUserInfoSaga({ formData }: any) {
    try {
        const data = yield call(postUserInfo, formData);
        yield put(getUser(data));
    } catch (e) {
        console.warn(e);
    }
}

export function* rootSaga() {
    yield takeEvery(LIKE_FILM, Like);
    yield takeEvery(UNLIKE_FILM, UnLike);
    yield takeEvery(ADD_USER_INFO, postUserInfoSaga);

    yield takeEvery(LOG_IN, signIn);

    yield all([fork(appFetchSaga)]);
}
