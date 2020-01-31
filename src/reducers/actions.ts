import { LOAD_MOVIES, RESET_ALL, ADD_TO_FAVORITE } from './actions-types';

export const getMovies = (newElements: ListElement[]) => ({
    type: LOAD_MOVIES,
    payload: newElements,
});

export const addToFavorite = (id: number) => ({
    type: ADD_TO_FAVORITE,
    payload: id
});

export const resetStore = () => ({ type: RESET_ALL });
