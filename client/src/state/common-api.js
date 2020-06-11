import {getUser} from './storage';

export const asyncGet = (apiUrl) => {
    const user = getUser();
    const token = user ? user.token : '';
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}

export const asyncPost = (apiUrl) => {
    const user = getUser();
    const token = user ? user.token : '';
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}