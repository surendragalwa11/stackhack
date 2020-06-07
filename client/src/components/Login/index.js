import React, {useState} from 'react';
import { connect } from 'react-redux';

import GoogleLogin from 'react-google-login';

import './index.css';

import {login, signup, socialLogin} from '../../state/user/api';

export const WelcomeSection = (props) => {
    return(
        <div className='welcome'>
            <h1 className='heading-1'>Welcome Back!</h1>
            <div className='content'>
                <div>
                    To keep connected with us please login
                    with your personal info
                </div>
                <button className='action-btn' onClick={() => props.onModeToggle(false)}>
                    SIGN IN
                </button>
            </div>
        </div>
    );
}

const LoginSectionComponent = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.signup(
            'normal',
            {username, email, password}
        )
    }
    const enableSubmit = !!username && !!email && !!password;
    return(
        <div className='login-form'>
            <h1 className='heading-2'>Create Account</h1>
            <div className='social-acs'>
                <img
                    src='/icons/fb-icon.png'
                    className='mr10'
                    alt='fb'
                    onClick={() => props.socialLogin('fb')}
                />
                <GoogleLogin
                    clientId="xxxxxxx"
                    render={renderProps => (
                        <img
                            src='/icons/google-icon.png'
                            alt='google'
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        />
                    )}
                    onSuccess={(res) => console.log(res)}
                    onFailure={(res) => console.log(res)}
                    // onSuccess={() => props.socialLogin('fb', true)}
                    // onFailure={() => props.socialLogin('fb', false)}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className='light-text'>
                or use your email for registration
            </div>
            <form className='login-form'>
                <input
                    type='text'
                    required
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
                <input
                    type='text'
                    required
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <input
                    type='password'
                    required
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <input
                    type='submit'
                    className='action-btn2'
                    disabled={!enableSubmit}
                    onClick={onSubmit}
                />
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    login: (type, data) => dispatch(login(type, data)),
    signup: (type, data) => dispatch(signup(type, data)),
    socialLogin: (type) => dispatch(socialLogin(type)),
});

const mapStateToProps = (state) => ({

});

export const LoginSection = connect(mapStateToProps, mapDispatchToProps)(LoginSectionComponent);