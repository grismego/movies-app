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
};

type Action<T> = { type: string; payload: T };

type ActionsT = typeof LOAD_MOVIES | ADD_TO_SUGGESTIONS | ADD_TO_FAVORITE | 'DEFAULT';

type RootReducer<T = ActionsT> = (state: RootState, action: Action<T>) => RootStore;
