import {
    LOAD_MOVIES,
    ADD_TO_SUGGESTIONS,
    ADD_SEARCH,
    ADD_TO_FILTER,
    GET_USER,
    LIKE_FILM,
    UNLIKE_FILM,
    LOG_IN,
    LOG_IN_FAILED,
    LOG_IN_SUCCES,
    ADD_USER_INFO,
    CHANGE_THEME,
    CHANGE_SELECT,
} from './actions-types';
import {
    fetchMovies,
    addingLike,
    addSuggestion,
    addSearchValues,
    addToFilters,
    getUser,
    removeLike,
    restoreState,
    logIn,
    logInFailed,
    logInSucces,
    addUserInfo,
    changeTheme,
    changeSelect,
} from './handlers';

const intialState = {
    movies: [],
    suggestions: [],
    search: '',
    selectedFilters: [],
    isAuth: Boolean(localStorage.getItem('isAuth')),
    theme: 'dark',
    selectedFilter: 'all',
    user: {
        login: 'IamAlexey95',
        password: 'sf2YCHKifM',
    },
};

const actionHandler = new Map<string, any>([
    [LOAD_MOVIES, fetchMovies],
    [ADD_SEARCH, addSearchValues],
    [ADD_TO_SUGGESTIONS, addSuggestion],
    [ADD_TO_FILTER, addToFilters],
    [GET_USER, getUser],
    [LIKE_FILM, addingLike],
    [UNLIKE_FILM, removeLike],
    [LOG_IN_SUCCES, logInSucces],
    [LOG_IN_FAILED, logInFailed],
    [LOG_IN, logIn],
    [ADD_USER_INFO, addUserInfo],
    [CHANGE_THEME, changeTheme],
    [CHANGE_SELECT, changeSelect],
    ['DEFAULT', restoreState],
]);

export function rootReducer(state = intialState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
