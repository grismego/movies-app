import React, { useState } from 'react';
import styles from './search.module.css';
import Autosuggest from 'react-autosuggest';

import './theme.css';

import { getMoviesTitle } from '../reducers/page/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { addSuggestion } from '../reducers/actions';

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
        const suggestions = moviesTitle.filter(language => regex.test(language));

        return suggestions;
    };

    return (
        <div className={styles.search}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsClearRequested={() => setSuggestions([])}
                onSuggestionsFetchRequested={({ value }) => {
                    // dispatch(addSuggestion(value));
                    setValue(value);
                    setSuggestions(getSuggestions(value));
                }}
                // alwaysRenderSuggestions={true}
                // onSuggestionSelected={(_, { suggestionValue }) => console.log('Selected: ' + suggestionValue)}
                getSuggestionValue={suggestion => suggestion}
                renderSuggestion={suggestion => <span>{suggestion}</span>}
                onSuggestionSelected={(event, { suggestionValue }) => {
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
        </div>
    );
};
