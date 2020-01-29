import { LOAD_MOVIES } from './../actions-types';

const intialState = {
    films: [],
};

export function pageReducer(state = intialState, action: Action<ActionsT>) {
    switch (action.type) {
        case LOAD_MOVIES:
            return { ...state, films: action.payload };

        default:
            return state;
    }
}
