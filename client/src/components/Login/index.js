import React from 'react';
import './index.css';

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

export const LoginSection = () => {
    return(
        <div className='login-form'>
            <h1 className='heading-2'>Create Account</h1>
            <div className='social-acs'>
                <img src='/icons/fb-icon.png' className='mr10' alt='fb'/>
                <img src='/icons/google-icon.png' alt='google' />
            </div>
            <div className='light-text'>
                or use your email for registration
            </div>
            <form className='login-form'>
                <input type='text' placeholder='Name' /><br />
                <input type='text' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <button className='action-btn2' onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    );
}