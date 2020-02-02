import React, { useState, useCallback } from 'react';
// import './movie-item.css';
import style from './movie-item.module.css';
import { POSTER_PATH } from './../constants';

import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite } from '../reducers/actions';

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
    isFavorite: boolean;
}

export const MovieItem = (props: IMoviesItemType) => {
    const { title, poster_path, isFavorite, id } = props;

    // const movie = useSelector((state: { page: { movies: ListElement[] } }) =>
    //     state.page.movies.find(it => it.id === id)
    // );

    const dispatch = useDispatch();

    const changeFavorite = (id: any) => {
        dispatch(addToFavorite(id));
    };

    return (
        <div className={style.card}>
            <img src={`${POSTER_PATH}/${poster_path}`} alt={title} className={style.img} />

            <div className={style.footer}>
                <a href='/' className={style.link}>
                    More Info{' '}
                    <span>
                        <FontAwesomeIcon border={false} icon={faChevronRight} />
                    </span>
                </a>
                <button className={style.button} onClick={() => changeFavorite(id)}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={style[`${isFavorite ? 'iconHeartActive' : 'iconHeart'}`]}
                    />
                </button>
            </div>
            {/* <div className={style.footer}>
                 <h1 className={style.title}>{title}</h1>
                <p className='movie-card__overview'>{overview}</p>
                <div className='movie-card__footer'>
                    <span>{duration} min</span>
                    <span>likes: {likes}</span>
                </div> */}
            {/* <button
                    className={style.button}
                    onClick={() => {
                        setFavorite(!isFavorite);
                    }}
                >
                    <span>{isFavorite ? `Убрать из избранного` : `Добавить в избранное`}</span>
                </button> 
            </div>*/}
        </div>
    );
};
