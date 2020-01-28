import { GET_MOVIES, RESET_ALL } from './actions-types';

export const getMovies = (newElements: ListElement[]) => ({
    type: GET_MOVIES,
    payload: newElements,
});

export const resetStore = () => ({ type: RESET_ALL });
