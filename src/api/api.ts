import { METHODS } from './../constants';
import { toJSON } from './util';
import { store } from '..';

type ApiT = {
    endPoint: string;
    authorization?: any;
};

type LoadT = {
    url: string;
    method?: any;
    body?: null | any;
    headers?: Headers;
};

export class ApiService {
    private _endPoint: string;
    private _authorization: string;
    private _login: null | string;

    constructor({ endPoint, authorization = null }: ApiT) {
        this._endPoint = endPoint;
        this._authorization = authorization;
        this._getStore = this._getStore.bind(this);
        this._login = null;

        Object.assign(this, { endPoint, authorization });
    }

    _checkStatus(response: any) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }
    _getStore() {
        const storage = store.getState().user;
        const { login, password } = storage;
        this._login = login;
        return btoa(`${login}:${password}`);
    }

    _load({
        url,
        method = null,
        body = null,
        headers = new Headers({
            Origin: 'http://localhost:3000/',
            Authorization: `Basic ${this._authorization || this._getStore()}`,
        }),
    }: LoadT) {
        return fetch(`${this._endPoint}/${url}`, { method, body, headers })
            .then(this._checkStatus)
            .then(toJSON)
            .catch(err => {
                throw err;
            });
    }

    removeLike(id: number) {
        return this._load({
            url: `movie/${id}/like`,
            method: METHODS.DELETE,
        });
    }

    sendingUserInfo(formData: any) {
        return this._load({ url: `user/${this._login}`, method: METHODS.PUT, body: formData });
    }

    getMovies() {
        return this._load({ url: `movies`, method: METHODS.GET });
    }

    addLike(id: number) {
        return this._load({ url: `movie/${id}/like`, method: METHODS.POST });
    }

    getUser() {
        return this._load({ url: `user/${this._login}`, method: METHODS.GET });
    }
}
