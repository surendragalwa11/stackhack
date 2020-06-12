import {
    fbLogin,
    googleLogin,
    normalLogin,

    fbLoginSuccess,
    googleLoginSuccess,
    normalLoginSuccess,

    fbLoginFail,
    googleLoginFail,
    normalLoginFail,

    normalSignup,
    normalSignupSuccess,
    normalSignupFail
} from './actions';

import {
    FB_LOGIN,
    GOOGLE_LOGIN,
    NORMAL_LOGIN,
    NORMAL_SIGNUP,
} from '../../config/api-urls';


const loginConfig = {
    fb: {
        url: FB_LOGIN,
        action: fbLogin,
        successAction: fbLoginSuccess,
        failureAction: fbLoginFail,
    },
    google: {
        url: GOOGLE_LOGIN,
        action: googleLogin,
        successAction: googleLoginSuccess,
        failureAction: googleLoginFail
    },
    normal: {
        url: NORMAL_LOGIN,
        action: normalLogin,
        successAction: normalLoginSuccess,
        failureAction: normalLoginFail,
    },
};

const signupConfig = {
    normal: {
        url: NORMAL_SIGNUP,
        action: normalSignup,
        successAction: normalSignupSuccess,
        failureAction: normalSignupFail,
    },
};

export const socialLogin = (type) => {
    const {url, action, successAction, failureAction} = loginConfig[type];
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url, {
                mode: 'no-cors',
            })
            .then((res) => res.json())
            .then(result => {
                dispatch(successAction(result));
                resolve(true)
            })
            .catch(error => {
                dispatch(failureAction(error))
                reject(false)
            })
        })
    }
}

export const login = (type, data) => {
    const {url, action, successAction, failureAction} = loginConfig[type];
    const payload = {
        username: data.username,
        password: data.password,
    };
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            })
            .then(async response => {
                // get JWT auth token
                const authToken = response.headers.get('x-access-token');
                const result = await response.json();
                // login failed
                if(result.status === 'error' || !result.status) {
                    dispatch(failureAction(result.message))
                    reject(false)
                } else {
                    // login success
                    const user = {
                        username: data.username,
                        email: data.username,
                        token: authToken,
                        loginTimestamp: Date.now(),
                    };
                    dispatch(successAction(user));
                    resolve(user);
                }
            })
            .catch(error => {
                dispatch(failureAction(error))
                reject(false)
            })
        })
    }
}

export const signup = (type, data) => {
    const {url, action, successAction, failureAction} = signupConfig[type];
    const payload = {
        username: data.username,
        email: data.email,
        password: data.password
    };
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            })
            .then((res) => res.json())
            .then(result => {
                dispatch(successAction(result));
                resolve(true)
            })
            .catch(error => {
                dispatch(failureAction(error))
                resolve(error)
            })
        })
    }
}
