import { METHODS } from './../constants';
import { toJSON } from './util';

type ApiT = {
    endPoint: string;
    authorization: string;
};

type LoadT = {
    url: string;
    method?: any;
    body?: null;
    headers?: Headers;
};

export class ApiService {
    private _endPoint: string;
    private _authorization: string;

    constructor({ endPoint, authorization }: ApiT) {
        this._endPoint = endPoint;
        this._authorization = authorization;
        Object.assign(this, { endPoint, authorization });
    }

    _checkStatus(response: any) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    _load({
        url,
        method = null,
        body = null,
        headers = new Headers({
            'Content-Type': 'application/json',
            Origin: 'http://localhost:3000/',
            Authorization: `Basic ${this._authorization}`,
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

    getMovies() {
        return this._load({ url: `movies`, method: METHODS.GET });
    }

    addLike(id: number) {
        return this._load({ url: `movie/${id}/like`, method: METHODS.POST });
    }

    getUser() {
        return this._load({ url: `user/IamAlexey95`, method: METHODS.GET });
    }
}
