import React, {useState} from 'react';
import { connect } from 'react-redux';

import SocialLogin from '../Login/social-login';

import './index.css';

import {useAuth} from '../../context/auth';
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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setAppUser} = useAuth();
    
    // on login form submit
    const onSubmit = (e) => {
        e.preventDefault();
        props.login('normal', {username, password})
        .then(res => {
            console.log('reslved', res)
            setAppUser(res)
        })
        .catch((err) => {
            console.log('rejected', err)
            setAppUser(null)
        })
    }
    
    const enableSubmit = !!username && !!password;
    return(
        <div className='signup-form'>
            <h1 className='heading-2'>Sign in to ToDo Manager</h1>
            <SocialLogin />
            <div className='light-text'>
                or use your email account
            </div>
            <form className='login-form'>
                <input
                    type='text'
                    required
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
                <input
                    type='password'
                    required
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <input
                    type='submit'
                    disabled={!enableSubmit}
                    className='action-btn2'
                    onClick={onSubmit}
                />
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