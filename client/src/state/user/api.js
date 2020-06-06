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

export const login = (type, data) => {
    console.log(type, data);
    const {url, action, successAction, failureAction} = loginConfig[type];
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url)
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
    console.log(type, data);
    const {url, action, successAction, failureAction} = signupConfig[type];
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(url)
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
