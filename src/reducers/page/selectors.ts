import { createSelector } from 'reselect';

const getMovies = (movies: ListElement[]) => movies;

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: ListElement) => ({ ...movie, isFavorite: false }))
);
