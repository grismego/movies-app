import {
    LOAD_MOVIES,
    ADD_SEARCH,
    RESET_ALL,
    ADD_TO_FAVORITE,
    ADD_TO_SUGGESTIONS,
    FILTER_MOVIES,
    ADD_TO_FILTER,
    GET_USER,
    LIKE_FILM,
    UNLIKE_FILM,
    LOG_IN_SUCCES,
    LOG_IN_FAILED,
    LOG_IN,
    ADD_USER_INFO,
    CHANGE_THEME,
    CHANGE_SELECT,
} from './actions-types';

export const addMovies = (newElements: MovieItem[]) => ({
    type: LOAD_MOVIES,
    payload: newElements,
});

export const getUser = (user: any) => ({
    type: GET_USER,
    payload: user,
});

export const addToFavorite = (id: number) => ({
    type: ADD_TO_FAVORITE,
    payload: id,
});

export const addToFilter = (filter: any) => ({
    type: ADD_TO_FILTER,
    payload: filter,
});

export const addSuggestion = (value: string) => ({
    type: ADD_TO_SUGGESTIONS,
    payload: value,
});

export const addingLike = (id: string) => ({
    type: LIKE_FILM,
    payload: id,
});

export const removingLike = (id: string) => ({
    type: UNLIKE_FILM,
    payload: id,
});

export const logIn = (login: string, password: string) => ({
    type: LOG_IN,
    login,
    password,
});

export const addingUserInfo = (formData: any) => {
    return {
        type: ADD_USER_INFO,
        formData,
    };
};

export const logInSucces = () => ({ type: LOG_IN_SUCCES });

export const logInFailed = () => ({ type: LOG_IN_FAILED });

export const addSearch = (value: string) => ({ type: ADD_SEARCH, payload: value });

export const filterMovies = (name: string) => ({
    type: FILTER_MOVIES,
    payload: name,
});

export const changeTheme = (value: string) => ({
    type: CHANGE_THEME,
    payload: value,
});

export const changeSelect = (value: string) => ({
    type: CHANGE_SELECT,
    payload: value.toLowerCase(),
});

export const resetStore = () => ({ type: RESET_ALL });
