import { createSelector } from 'reselect';

const getMovies = (state: RootStore) => state.movies;

const getGenres = (state: RootStore) => state.movies.map(movie => movie.genres);

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: MovieItem) => ({ ...movie, isFavorite: false }))
);

const getDesiredMovies = (state: RootStore) => {
    const { search } = state;

    if (search === '') {
        return state.movies;
    }

    if (search.length > 2) {
        console.log(state);
        return state.movies.filter(movie => (search === '' ? true : movie.title.includes(search)));
    }

    return state.movies;
};

export const selectDesiredMovies = createSelector(getDesiredMovies, movies => movies);

export const getUnicGenre = createSelector(getGenres, genres => new Set(genres.flat()));

export const getFavoritesMovies = createSelector(getMovies, movies => movies.filter(movie => movie.isFavorite));

export const getMoviesTitle = createSelector(getMovies, (movies: MovieItem[]) =>
    movies.map((movie: MovieItem) => movie.title)
);
