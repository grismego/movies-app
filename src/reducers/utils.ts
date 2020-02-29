import { ApiService } from '../api/api';
import { BASE_URL } from '../constants';

const api = new ApiService({
    endPoint: BASE_URL,
});

export const fetchData = () => api.getMovies();

export const fetchUser = () => api.getUser();

export const addLike = (id: number) => api.addLike(id);

export const removeLike = (id: number) => api.removeLike(id);

export const postUserInfo = (FormData: any) => api.sendingUserInfo(FormData);
