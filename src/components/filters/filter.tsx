import React, { useState } from 'react';
import styles from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToFilter } from '../../reducers/actions';
import { getUnicGenre } from '../../reducers/selectors';
import { ButtonElem } from '../button/button';
import { Label } from './styled';

export const Filters = () => {
    const movies = useSelector((state: RootStore) => state);
    const unicGenres = Array.from(getUnicGenre(movies));

    const [filters, setActive] = useState<any>(new Map());

    const dispatch = useDispatch();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const item = evt.target.name;
        const isChecked = evt.target.checked;
        setActive(filters.set(item, isChecked));
    };

    return (
        <div className={styles.form}>
            {unicGenres.map(genre => {
                return (
                    <Label htmlFor={genre} key={genre}>
                        <input type='checkbox' id={genre} name={genre} onChange={handleChange} />
                        {genre}
                    </Label>
                );
            })}

            <ButtonElem
                small
                primary
                onClick={() => {
                    const filteredMap = new Map([...filters].filter(([_, value]) => value));
                    dispatch(addToFilter(filteredMap));
                }}
            >
                Apply
            </ButtonElem>
        </div>
    );
};
