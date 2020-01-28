import { GET_MOVIES } from './actions-types';

const intialState: RootStore = { list: [] };

const ActionCreator = new Map<string, RootReducer>([
    [
        GET_MOVIES,
        (state, action: Action<ListElement>) => {
            const { list } = state;
            return { list: [...list, action.payload] };
        },
    ],
    ['DEFAULT', (state: RootStore) => state],
]);

export function rootReducer(state = intialState, action: Action<ActionsT>) {
    const reducerToFire = (ActionCreator.has(action.type)
        ? ActionCreator.get(action.type)
        : ActionCreator.get('DEFAULT')) as RootReducer;
    return reducerToFire(state, action);
}
