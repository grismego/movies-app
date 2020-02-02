import React, { useState } from 'react';
import './movie-item.css';
import style from './movie-item.module.css';

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
    const { title, overview, duration, likes, poster_path } = props;

    const [isFavorite, setFavorite] = useState(false);

    return (
        <div className={style.card}>
            <img src={poster_path} alt={title} className={style.img} />
            <div className={style.footer}>
                <h1 className={style.title}>{title}</h1>
                <p className='movie-card__overview'>{overview}</p>
                <div className='movie-card__footer'>
                    <span>{duration} min</span>
                    <span>likes: {likes}</span>
                </div>
                <button
                    className={style.button}
                    onClick={() => {
                        setFavorite(!isFavorite);
                    }}
                >
                    <span>{isFavorite ? `Убрать из избранного` : `Добавить в избранное`}</span>
                </button>
            </div>
        </div>
    );
};
