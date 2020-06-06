import {getUser} from './storage';

export const asyncGet = (apiUrl) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-access-token': 'XXXXX',
            }
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}

export const asyncPost = (apiUrl) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'x-access-token': 'XXXXX'
            }
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}