import { LOAD_MOVIES, RESET_ALL, ADD_TO_FAVORITE, ADD_TO_SUGGESTIONS } from './actions-types';

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

export const resetStore = () => ({ type: RESET_ALL });
