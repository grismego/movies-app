import { LOAD_MOVIES, ADD_TO_FAVORITE, ADD_TO_SUGGESTIONS, ADD_SEARCH } from './actions-types';
import { fetchMovies, addToFavorite, addSuggestion, addSearchValues, returnedState } from './handlers';

const intialState = {
    movies: [],
    suggestions: [],
    search: '',
};

const actionHandler = new Map<string, any>([
    [LOAD_MOVIES, fetchMovies],
    [ADD_SEARCH, addSearchValues],
    [ADD_TO_FAVORITE, addToFavorite],
    [ADD_TO_SUGGESTIONS, addSuggestion],
    ['DEFAULT', returnedState],
]);

export function rootReducer(state = intialState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
