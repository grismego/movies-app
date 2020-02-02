import { LOAD_MOVIES, ADD_TO_FAVORITE } from './../actions-types';

const intialState = {
    movies: [],
};

export function pageReducer(state = intialState, action: Action<ActionsT>) {
    switch (action.type) {
        case LOAD_MOVIES:
            return { movies: action.payload };

        case ADD_TO_FAVORITE:
            return {
                ...state,
                movies: state.movies.map((movie: ListElement) =>
                    movie.id === action.payload ? { ...movie, isFavorite: !movie.isFavorite } : movie
                ),
            };

        default:
            return state;
    }
}
