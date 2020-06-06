

const initialState = {
    login: {loginStatus: null, userInfo:{}, loginType: null, progress: null},
    signup: {signupStatus: null, signupType: null, progress: null},
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FB_LOGIN':
        case 'GOOGLE_LOGIN':
        case 'NORMAL_LOGIN':
            return({
                ...state,
                login:{
                    ...state.login,
                    progress: true
                }
            });
        case 'FB_LOGIN_SUCCESS':
        case 'GOOGLE_LOGIN_SUCCESS':
        case 'NORMAL_LOGIN_SUCCESS':
            return({
            ...state,
            login:{
                ...state.login,
                loginStatus: true,
                userInfo: action.data,
                loginType: action.loginType,
                progress: false,
            }
        });
        case 'FB_LOGIN_FAIL':
        case 'GOOGLE_LOGIN_FAIL':
        case 'NORMAL_LOGIN_FAIL':
            return({
            ...state,
            login:{
                ...state.login,
                loginStatus: false,
                progress: false,
            }
        });
        case 'NORMAL_SIGNUP':
            return({
                ...state,
                signup:{
                    ...state.signup,
                    progress: true
                }
            });
        case 'NORMAL_SIGNUP_SUCCESS':
            return({
            ...state,
            signup:{
                ...state.signup,
                signupStatus: true,
                signupType: action.signupType,
                progress: false,
            }
        });
        case 'NORMAL_SIGNUP_FAIL':
            return({
            ...state,
            signup:{
                ...state.signup,
                signupStatus: false,
                progress: false,
            }
        });
        default: return state;
    }
}

export default userReducer;