import { LOAD_MOVIES } from './../actions-types';

const intialState = {
    movies: [],
};

export function pageReducer(state = intialState, action: Action<ActionsT>) {
    switch (action.type) {
        case LOAD_MOVIES:
            return { ...state, movies: action.payload };

        default:
            return state;
    }
}
