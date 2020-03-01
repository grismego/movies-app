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

export const addSearch = (value: string) => ({ type: ADD_SEARCH, payload: value });

export const filterMovies = (name: string) => ({
    type: FILTER_MOVIES,
    payload: name,
});

export const resetStore = () => ({ type: RESET_ALL });
