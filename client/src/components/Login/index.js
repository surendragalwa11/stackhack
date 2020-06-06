import React, {useState} from 'react';
import { connect } from 'react-redux';

import './index.css';

import {signup} from '../../state/user/api';

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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.signup(
            'normal',
            {name, email, password}
        )
    }
    return(
        <div className='login-form'>
            <h1 className='heading-2'>Create Account</h1>
            <div className='social-acs'>
                <img
                    src='/icons/fb-icon.png'
                    className='mr10'
                    alt='fb'
                    onClick={() => props.signup('fb')}
                />
                <img
                    src='/icons/google-icon.png'
                    alt='google'
                    onClick={() => props.signup('google')}
                />
            </div>
            <div className='light-text'>
                or use your email for registration
            </div>
            <form className='login-form'>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <input
                    type='text'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button
                    className='action-btn2'
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    signup: (type, data) => dispatch(signup(type, data)),
});

const mapStateToProps = (state) => ({

});

export const LoginSection = connect(mapStateToProps, mapDispatchToProps)(LoginSectionComponent);