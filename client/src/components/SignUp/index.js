import React, {useState} from 'react';
import { connect } from 'react-redux';

import './index.css';

import {login} from '../../state/user/api';


export const WelcomeSection = (props) => {
    return(
        <div className='welcome'>
            <h1 className='heading-1'>Hello, Friend!</h1>
            <div className='content'>
                <div>
                    Enter your personal details
                    and start journey with us
                </div>
                <button className='action-btn' onClick={() => props.onModeToggle(true)}>
                    SIGN UP
                </button>
            </div>
        </div>
    );
}

const SignupSectionComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.login('normal', {email, password})
    }
    return(
        <div className='signup-form'>
            <h1 className='heading-2'>Sign in to ToDo Manager</h1>
            <div className='social-acs'>
                <img
                    src='/icons/fb-icon.png'
                    alt='fb'
                    className='mr10'
                    onClick={() => props.login('fb')}
                />
                <img
                    src='/icons/google-icon.png'
                    alt='google'
                    onClick={() => props.login('google')}
                />
            </div>
            <div className='light-text'>
                or use your email account
            </div>
            <form className='login-form'>
                <input
                    type='email'
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
    login: (type, data) => dispatch(login(type, data)),
});

const mapStateToProps = (state) => ({

});

export const SignupSection = connect(mapStateToProps, mapDispatchToProps)(SignupSectionComponent);