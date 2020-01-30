import { createSelector } from 'reselect';

const getMovies = (movies: ListElement[]) => movies;

// const createNewArray = (getMovies: ListElement[]) => {
//     return getMovies.map((movie: ListElement) => ({ ...movie, isFavorite: false }));
// };

export const addingFavoriteKey = createSelector(getMovies, movies =>
    movies.map((movie: ListElement) => ({ ...movie, isFavorite: false }))
);
