import {
    LOAD_MOVIES,
    ADD_SEARCH,
    RESET_ALL,
    ADD_TO_FAVORITE,
    ADD_TO_SUGGESTIONS,
    FILTER_MOVIES,
} from './actions-types';

export const getMovies = (newElements: MovieItem[]) => ({
    type: LOAD_MOVIES,
    payload: newElements,
});

export const addToFavorite = (id: number) => ({
    type: ADD_TO_FAVORITE,
    payload: id,
});

export const addSuggestion = (value: string) => ({
    type: ADD_TO_SUGGESTIONS,
    payload: value,
});

export const addSearch = (value: string) => ({ type: ADD_SEARCH, payload: value });

export const filterMovies = (name: string) => ({
    type: FILTER_MOVIES,
    payload: name,
});

export const resetStore = () => ({ type: RESET_ALL });
