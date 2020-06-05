import React from 'react';

import {
    WelcomeSection, LoginSection
} from '../../components/Login';

import './index.css';

const LoginPage = (props) => {
    return(
        <div className='page-container login-page row mx-auto hhvh'>
            <div className='col-sm-5 welcome-section hvc'>
                <WelcomeSection
                    onModeToggle={props.onModeToggle}
                />
            </div>
            <div className='col-sm-7 login-section hvc'>
                <LoginSection />
            </div>
        </div>
    );
}

export default LoginPage;