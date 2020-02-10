export const fetchMovies = (state: RootStore, action: { payload: MovieItem[] }) => ({
    ...state,
    movies: action.payload,
});

export const addToFavorite = (state: RootStore, action: { payload: number }) => ({
    ...state,
    movies: state.movies.map((movie: MovieItem) =>
        movie.id === action.payload ? { ...movie, isFavorite: !movie.isFavorite } : movie
    ),
});

export const addSuggestion = (state: RootStore, action: { payload: string }) => ({
    ...state,
    suggestions: [...state.suggestions, action.payload],
});
export const addSearchValues = (state: RootStore, action: { payload: string }) => ({
    ...state,
    search: action.payload,
});