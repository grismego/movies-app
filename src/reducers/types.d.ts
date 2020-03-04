type MovieItem = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director?: string;
    poster_path?: string;
    release_date: string;
    isFavorite?: boolean;
};

type RootStore = {
    movies: MovieItem[];
    search: string | any;
    suggestions: string[];
    selectedFilters: any;
    isAuth: string;
    user: any;
    theme: string;
    selectedFilter: string;
};

type Action<T> = { type: string; payload: T };

type ActionsT = typeof ADD_TO_FILTER | LOAD_MOVIES | ADD_TO_SUGGESTIONS | ADD_TO_FAVORITE | 'DEFAULT';

type RootReducer<T = ActionsT> = (state: RootState, action: Action<T>) => RootStore;
