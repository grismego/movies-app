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

export const addToFilters = (state: RootStore, action: { payload: any }) => ({
    ...state,
    selectedFilters: state.selectedFilters.includes(action.payload)
        ? [...state.selectedFilters.filter((it: any) => it !== action.payload)]
        : [...state.selectedFilters, action.payload],
});

export const addSuggestion = (state: RootStore, action: { payload: string }) => ({
    ...state,
    suggestions: [...new Set([...state.suggestions, action.payload])],
});

export const addSearchValues = (state: RootStore, action: { payload: string }) => ({
    ...state,
    search: action.payload,
});
