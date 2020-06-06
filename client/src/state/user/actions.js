import {
    FB_LOGIN,
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL,
    GOOGLE_LOGIN,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAIL,
    NORMAL_LOGIN,
    NORMAL_LOGIN_SUCCESS,
    NORMAL_LOGIN_FAIL,
    NORMAL_SIGNUP,
    NORMAL_SIGNUP_SUCCESS,
    NORMAL_SIGNUP_FAIL,
} from './constants';

export const fbLogin = (data) => ({
    type: FB_LOGIN,
    data,
});

export const fbLoginFail = (error) => ({
    type: FB_LOGIN_FAIL,
    error,
});

export const fbLoginSuccess = (data) => ({
    type: FB_LOGIN_SUCCESS,
    data,
});

export const googleLogin = (data) => ({
    type: GOOGLE_LOGIN,
    data,
});

export const googleLoginFail = (error) => ({
    type: GOOGLE_LOGIN_FAIL,
    error,
});

export const googleLoginSuccess = (data) => ({
    type: GOOGLE_LOGIN_SUCCESS,
    data,
});

export const normalLogin = (data) => ({
    type: NORMAL_LOGIN,
    data,
});

export const normalLoginFail = (error) => ({
    type: NORMAL_LOGIN_FAIL,
    error,
});

export const normalLoginSuccess = (data) => ({
    type: NORMAL_LOGIN_SUCCESS,
    data,
});


export const normalSignup = (data) => ({
    type: NORMAL_SIGNUP,
    data,
});

export const normalSignupFail = (error) => ({
    type: NORMAL_SIGNUP_FAIL,
    error,
});

export const normalSignupSuccess = (data) => ({
    type: NORMAL_SIGNUP_SUCCESS,
    data,
});