export const fetchMovies = (state: RootStore, action: { payload: MovieItem[] }) => ({
    ...state,
    movies: action.payload,
});

export const addToFilters = (state: RootStore, action: { payload: any }) => ({
    ...state,
    selectedFilters: Array.from(action.payload.keys()),
});

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

export const addingLike = (state: RootStore, action: { payload: number }) => {
    console.log(action.payload);
    return {
        ...state,
        user: { ...state.user, likes: [...state.user.likes, action.payload] },
    };
};

export const removeLike = (state: RootStore, action: { payload: number }) => ({
    ...state,
    user: { ...state.user, likes: state.user.likes.filter((id: number) => id !== action.payload) },
});

export const logIn = (state: RootStore, action: { login: string; password: string }) => ({
    ...state,
    user: {
        ...state.user,
        login: action.login,
        password: action.password,
    },
});

export const addUserInfo = (state: RootStore, action: { bio: string; name: string; avatar: string }) => {
    return {
        ...state,
    };
};

export const logInSucces = (state: RootStore, action: { payload: number }) => ({
    ...state,
    isAuth: true,
});

export const logInFailed = (state: RootStore, action: { payload: number }) => ({
    ...state,
    isAuth: false,
});

export const changeTheme = (state: RootStore, action: { payload: string }) => ({
    ...state,
    theme: action.payload,
});

export const changeSelect = (state: RootStore, action: { payload: string }) => ({
    ...state,
    selectedFilter: action.payload,
});

export const restoreState = (state: RootStore) => state;
