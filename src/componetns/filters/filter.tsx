import React, { useState } from 'react';
import styles from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToFilter } from '../../reducers/actions';
import { getUnicGenre } from '../../reducers/selectors';

export const Filters = () => {
    const movies = useSelector((state: RootStore) => state);
    const unicGenres = Array.from(getUnicGenre(movies));

    // const [filters, setActive] = useState<any>({});
    const dispatch = useDispatch();

    return (
        <div className={styles.form}>
            {unicGenres.map(genre => {
                return (
                    <label htmlFor={genre} key={genre}>
                        <input
                            type='checkbox'
                            id={genre}
                            onClick={() => {
                                dispatch(addToFilter(genre));
                                // setActive({ ...filters, [genre]: !filters[genre] });
                            }}
                        />
                        {genre}
                    </label>
                );
            })}
        </div>
    );
};
