import { createSelector } from 'reselect';

const getMovies = (state: RootStore) => state.movies;

const getGenres = (state: RootStore) => state.movies.map(movie => movie.genres);

const getUser = (state: RootStore) => state.user;

const getSuggestions = (state: RootStore) => state.suggestions;

const getDesiredMovies = (state: RootStore) => {
    const { search, selectedFilters } = state;

    if (selectedFilters.length) {
        return state.movies.filter(movie => selectedFilters.every((genre: string) => movie.genres.includes(genre)));
    }

    if (search === '') {
        return state.movies;
    }

    if (search.length > 1) {
        return state.movies.filter(movie =>
            search === '' ? true : movie.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return state.movies;
};

export const selectedUser = createSelector(getUser, user => user);

export const selectDesiredMovies = createSelector(getDesiredMovies, movies => movies);

export const selectFavoriteMovies = createSelector(getMovies, getUser, (movies, user) =>
    movies.filter(movie => user.likes && user.likes.includes(Number(movie.id)))
);

export const getUnicGenre = createSelector(getGenres, genres => new Set(genres.flat()));

export const getFavoritesMovies = createSelector(getMovies, movies => movies.filter(movie => movie.isFavorite));

export const getMoviesTitle = createSelector(getMovies, (movies: MovieItem[]) =>
    movies.map((movie: MovieItem) => movie.title)
);

export const selectedSuggestions = createSelector(getSuggestions, suggestions => suggestions.slice(0, 5));
