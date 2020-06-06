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

    fbSignup,
    googleSignup,
    normalSignup,

    fbSignupSuccess,
    googleSignupSuccess,
    normalSignupSuccess,

    fbSignupFail,
    googleSignupFail,
    normalSignupFail
} from './actions';

import {
    FB_LOGIN,
    GOOGLE_LOGIN,
    NORMAL_LOGIN,
    FB_SIGNUP,
    GOOGLE_SIGNUP,
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
    fb: {
        url: FB_SIGNUP,
        action: fbSignup,
        successAction: fbSignupSuccess,
        failureAction: fbSignupFail,
    },
    google: {
        url: GOOGLE_SIGNUP,
        action: googleSignup,
        successAction: googleSignupSuccess,
        failureAction: googleSignupFail,
    },
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
                dispatch(successAction(result));
                resolve(true)
            })
            .catch(error => {
                dispatch(failureAction(error))
                reject(error)
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
                reject(error)
            })
        })
    }
}
