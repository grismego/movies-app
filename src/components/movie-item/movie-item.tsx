import React from 'react';
import style from './movie-item.module.css';
import { POSTER_PATH } from '../../constants';

import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addingLike, removingLike } from '../../reducers/actions';

export const MovieItem = (props: MovieItem) => {
    const { title, poster_path, id } = props;

    const dispatch = useDispatch();

    const changeFavorite = (id: any) => {
        likes.indexOf(id) >= 0 ? dispatch(removingLike(id)) : dispatch(addingLike(id));
    };

    const user = useSelector((state: RootStore) => state.user);

    const { likes } = user;

    return (
        <div className={style.card}>
            <img src={`${POSTER_PATH}${poster_path}`} alt={title} className={style.img} />

            <div className={style.footer}>
                <a href='/' className={style.link}>
                    More Info
                    <span>
                        <FontAwesomeIcon border={false} icon={faChevronRight} />
                    </span>
                </a>
                <button className={style.button} onClick={() => changeFavorite(id)}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={style[`${likes.indexOf(id) >= 0 ? 'iconHeartActive' : 'iconHeart'}`]}
                    />
                </button>
            </div>
        </div>
    );
};
