import { createSelector } from 'reselect';

const getMovies = (movies: MovieItem[]) => movies;

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: MovieItem) => ({ ...movie, isFavorite: false }))
);
