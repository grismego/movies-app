import React from 'react';
import { SelectElem } from './styled';

export const Select = () => {
    return (
        <SelectElem>
            <option value='all'>All</option>
            <option value='director'>Director</option>
            <option value='advanced'>Advanced</option>
        </SelectElem>
    );
};
