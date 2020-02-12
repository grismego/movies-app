import React from 'react';
import style from './movie-item.module.css';
import { BASE_URL } from '../../constants';

import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../reducers/actions';

export const MovieItem = (props: MovieItem) => {
    const { title, poster_path, isFavorite, id } = props;

    const dispatch = useDispatch();

    const changeFavorite = (id: any) => {
        dispatch(addToFavorite(id));
    };

    return (
        <div className={style.card}>
            <img src={`${BASE_URL}/${poster_path}`} alt={title} className={style.img} />

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
        </div>
    );
};
