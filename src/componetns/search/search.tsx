import React, { useState } from 'react';
import styles from './search.module.css';
import Autosuggest from 'react-autosuggest';

import './theme.css';

import { getMoviesTitle } from '../../reducers/page/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { addSuggestion } from '../../reducers/actions';

export const Search = () => {
    const [value, setValue] = useState('');

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const dispatch = useDispatch();

    const movies = useSelector((state: { page: { movies: [] } }) => state.page.movies);
    const sugRes = useSelector((state: { page: { suggestions: [] } }) => state.page.suggestions);

    const moviesTitle = getMoviesTitle(movies);

    const escapeRegexCharacters = (str: string) => str.replace(/([ .\w']+?)(\W\d{4}\W?.*)/g, '\\$&');

    const getSuggestions = (value: string) => {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return sugRes;
        }

        const regex = new RegExp(escapedValue, 'i');
        const suggestions = moviesTitle.filter(title => regex.test(title));

        return suggestions;
    };

    return (
        <div className={styles.search}>
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
            <button onClick={() => console.log(value)}>Search</button>
        </div>
    );
};
