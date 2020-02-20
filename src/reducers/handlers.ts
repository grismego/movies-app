export const fetchMovies = (state: RootStore, action: { payload: MovieItem[] }) => ({
    ...state,
    movies: action.payload,
});

export const addToFilters = (state: RootStore, action: { payload: any }) => ({
    ...state,
    selectedFilters: Array.from(action.payload.keys()),
});

// export const getUser = (state: RootStore, action: { payload: any }) => ({
//     ...state,
//     user: { ...state.user, ...action.payload },
// });

export const getUser = (state: RootStore, action: { payload: any }) => {
    return Object.assign({}, state, {
        user: { ...state.user, ...action.payload },
    });
};

export const addSuggestion = (state: RootStore, action: { payload: string }) => ({
    ...state,
    suggestions: [...new Set([...state.suggestions, action.payload])],
});

export const addSearchValues = (state: RootStore, action: { payload: string }) => ({
    ...state,
    search: action.payload,
});

export const addingLike = (state: RootStore, action: { payload: number }) => ({
    ...state,
    user: { ...state.user, likes: [...state.user.likes, action.payload] },
});

export const removeLike = (state: RootStore, action: { payload: number }) => ({
    ...state,
    user: { ...state.user, likes: state.user.likes.filter((id: number) => id !== action.payload) },
});

export const restoreState = (state: RootStore) => state;
