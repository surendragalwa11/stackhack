import React from 'react';
import './index.css';

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

export const SignupSection = () => {
    return(
        <div className='signup-form'>
            <h1 className='heading-2'>Sign in to ToDo Manager</h1>
            <div className='social-acs'>
                <img src='/icons/fb-icon.png' alt='fb' className='mr10' />
                <img src='/icons/google-icon.png' alt='google' />
            </div>
            <div className='light-text'>
                or use your email account
            </div>
            <form className='login-form'>
                <input type='text' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <button
                    className='action-btn2'
                    onClick={(e) => e.preventDefault()}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}