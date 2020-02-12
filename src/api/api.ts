import { BASE_URL } from './../constants';

export const api = {
    getData(url: string = '') {
        return fetch(`${BASE_URL}${url}`).then(response => response.json());
    },
};
