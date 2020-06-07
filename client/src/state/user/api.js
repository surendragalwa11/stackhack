import {setUser} from './storage';

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
    console.log(url, action, successAction, failureAction);
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url, {
                mode: 'no-cors',
            })
            .then((res) => res.json())
            .then(result => {
                // set local storage
                setUser(result)
                // dispatch action
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
            .then((res) => res.json())
            .then(result => {
                // set local storage
                setUser(result)
                // dispatch action
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

export const signup = (type, data) => {
    const {url, action, successAction, failureAction} = signupConfig[type];
    const payload = {
        username: data.username,
        email: data.email,
        password: data.password
    };
    console.log(type, data, payload);
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
