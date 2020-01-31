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
                movies: state.movies.map((movie: ListElement) => {
                    if (movie.id === action.payload) {
                        return {
                            ...movie,
                            isFavorite: !movie.isFavorite
                        }
                    } else {
                        return movie
                    }
                })
            }

        default:
            return state;
    }
}
