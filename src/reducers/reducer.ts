import { LOAD_MOVIES, ADD_TO_FAVORITE, ADD_TO_SUGGESTIONS, ADD_SEARCH, ADD_TO_FILTER, GET_USER } from './actions-types';
import { fetchMovies, addToFavorite, addSuggestion, addSearchValues, addToFilters, getUser } from './handlers';

const intialState = {
    movies: [],
    suggestions: [],
    search: '',
    selectedFilters: [],
    user: null,
};

const actionHandler = new Map<string, any>([
    [LOAD_MOVIES, fetchMovies],
    [ADD_SEARCH, addSearchValues],
    [ADD_TO_FAVORITE, addToFavorite],
    [ADD_TO_SUGGESTIONS, addSuggestion],
    [ADD_TO_FILTER, addToFilters],
    [GET_USER, getUser],
    ['DEFAULT', () => intialState],
]);

export function rootReducer(state = intialState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
