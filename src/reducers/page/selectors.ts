import { createSelector } from 'reselect';

const getMovies = (movies: MovieItem[]) => movies;

const getGenres = (movies: MovieItem[]) => movies.map(movie => movie.genres);

// export const getUnicGenre = createSelector([getMovies], movies => [
//     new Set(movies.map(movie => movie.genres.map(genre => genre))),
// ]);

export const getArraysGenre = createSelector(getMovies, getGenres);

export const getUnicGenre = createSelector([getMovies, getArraysGenre], genres => console.log(genres));

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: MovieItem) => ({ ...movie, isFavorite: false }))
);

export const getMoviesTitle = createSelector(getMovies, movies => movies.map((movie: MovieItem) => movie.title));
