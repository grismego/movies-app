import React from 'react';
import './movie-item.css';

export interface IProps {
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

export const MovieItem = (props: IProps) => {
    const { title, overview, duration, likes } = props;
    return (
        <div className='movie-card'>
            <h1 className='movie-card__title'>{title}</h1>
            <p className='movie-card__overview'>{overview}</p>
            <div className='movie-card__footer'>
                <span>{duration} min</span>
                <span>likes: {likes}</span>
            </div>
        </div>
    );
};
