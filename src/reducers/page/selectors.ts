import { createSelector } from 'reselect';

const getMovies = (movies: MovieItem[]) => movies;

const getGenres = (movies: MovieItem[]) => movies.map(movie => movie.genres);

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: MovieItem) => ({ ...movie, isFavorite: false }))
);

// const getMoviesByTitle = (movies, title) => movies.filter(movie => movie.title === title)

export const getArraysGenre = createSelector(getMovies, getGenres);

export const getUnicGenre = createSelector(getGenres, genres => new Set(genres.flat()));

export const getFavoritesMovies = createSelector(getMovies, movies => movies.filter(movie => movie.isFavorite));

export const getMoviesTitle = createSelector(getMovies, movies => movies.map((movie: MovieItem) => movie.title));
