import { LOAD_MOVIES, ADD_TO_FAVORITE, ADD_TO_SUGGESTIONS } from './../actions-types';

const intialState = {
    movies: [],
    suggestions: [],
};

export function pageReducer(state = intialState, action: Action<ActionsT>) {
    switch (action.type) {
        case LOAD_MOVIES:
            return { ...state, movies: action.payload };

        case ADD_TO_FAVORITE:
            return {
                ...state,
                movies: state.movies.map((movie: MovieItem) =>
                    movie.id === action.payload ? { ...movie, isFavorite: !movie.isFavorite } : movie
                ),
            };
        case ADD_TO_SUGGESTIONS:
            return {
                ...state,
                suggestions: [...state.suggestions, action.payload],
                // suggestions: [...state.suggestions.add(action.payload)],
            };

        default:
            return state;
    }
}
