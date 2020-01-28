import { createStore } from 'redux';

const initialState = {
    films: [],
};

function films(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FILM':
            return { ...state, films: action.payload };
        default:
            return state;
    }
}

const store = createStore(films);

export default store;
