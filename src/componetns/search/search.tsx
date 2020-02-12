import React, { useState } from 'react';
import styles from './search.module.css';
import Autosuggest from 'react-autosuggest';

import './theme.css';

import { getMoviesTitle, getUnicGenre } from '../../reducers/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { addSuggestion, addSearch } from '../../reducers/actions';
import { Filters } from '../filters/filter';

export const Search = () => {
    const [value, setValue] = useState('');

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const dispatch = useDispatch();

    const movies = useSelector((state: RootStore) => state);
    const sugRes = useSelector((state: RootStore) => state.suggestions);

    const moviesTitle = getMoviesTitle(movies);

    const getSuggestions = (value: string) =>
        value.length >= 1 ? moviesTitle.filter(title => title.toLowerCase().includes(value.toLowerCase())) : sugRes;

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.search}>
                <select name='' id=''>
                    <option value='All'>All</option>
                    <option value='All'>Director</option>
                    <option value='All'>Advanced</option>
                </select>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionsFetchRequested={({ value }) => {
                        setValue(value);
                        setSuggestions(getSuggestions(value));
                    }}
                    alwaysRenderSuggestions={suggestions ? true : false}
                    getSuggestionValue={suggestion => suggestion}
                    renderSuggestion={suggestion => <span>{suggestion}</span>}
                    onSuggestionSelected={(_, { suggestionValue }) => {
                        dispatch(addSuggestion(suggestionValue));
                    }}
                    inputProps={{
                        placeholder: 'Search Movier+',
                        value,
                        onChange: (_, { newValue, method }) => {
                            setValue(newValue);
                        },
                    }}
                    highlightFirstSuggestion={true}
                />
                <button
                    onClick={() => {
                        dispatch(addSearch(value));
                        dispatch(addSuggestion(value));
                    }}
                >
                    Search
                </button>
            </div>

            {/* 
            movies.filter(movie =>
        genres.some(genreId =>
            movie.genre.includes(genreId)
        )
     ) */}
            <Filters />
        </div>
    );
};
