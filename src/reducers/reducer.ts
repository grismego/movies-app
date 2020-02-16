import { combineReducers } from 'redux';
import { pageReducer } from './page/page';

export const rootReducer = combineReducers({
    page: pageReducer,
});
