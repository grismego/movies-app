import React, { useState } from 'react';
import './movie-item.css';

export interface IMoviesItemType {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director?: string;
    poster_path?: string;
    release_date: string;
}

export const MovieItem = (props: IMoviesItemType) => {
    const { title, overview, duration, likes } = props;

    const [isFavorite, setFavorite] = useState(false);

    return (
        <div className='movie-card'>
            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * (1000 - 1)) + 1}/200/300`} alt={title} />
            <h1 className='movie-card__title'>{title}</h1>
            <p className='movie-card__overview'>{overview}</p>
            <div className='movie-card__footer'>
                <span>{duration} min</span>
                <span>likes: {likes}</span>
            </div>
            <button
                onClick={() => {
                    setFavorite(!isFavorite);
                }}
            >
                {isFavorite ? `Убрать из избранного` : `Добавить в избранное`}
            </button>
        </div>
    );
};
