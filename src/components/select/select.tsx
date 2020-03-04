import React from 'react';
import { SelectElem } from './styled';
import { useDispatch } from 'react-redux';
import { changeSelect } from '../../reducers/actions';

export const Select = () => {
    const dispatch = useDispatch();

    const handleChangeSelect = (evt: any) => {
        dispatch(changeSelect(evt.target.value));
    };

    return (
        <SelectElem onChange={handleChangeSelect}>
            <option value='all'>All</option>
            <option value='director'>Director</option>
            <option value='advanced'>Advanced</option>
        </SelectElem>
    );
};
