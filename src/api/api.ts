import { METHODS } from './../constants';
import { toJSON } from './util';

type ApiT = {
    endPoint: string;
    authorization: string;
};

type LoadT = {
    url: string;
    method?: string;
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
        method = METHODS.GET,
        body = null,
        headers = new Headers({
            'Content-Type': 'application/json',
            Authorization: `Basic ${this._authorization}`,
        }),
    }: LoadT) {
        return fetch(`${this._endPoint}/${url}`, { method, body, headers })
            .then(this._checkStatus)
            .catch(err => {
                throw err;
            });
    }

    getMovies() {
        return this._load({ url: `movies` }).then(toJSON);
    }

    getUser() {
        return this._load({ url: `user/IamAlexey95` }).then(toJSON);
    }
}
