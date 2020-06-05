import React from 'react';

import {
    WelcomeSection, SignupSection
} from '../../components/SignUp';

import './index.css';

const SignupPage = (props) => {
    return(
        <div className='page-container signup-page row mx-auto hhvh'>
            <div className='col-sm-7 signup-section hvc'>
                <SignupSection />
            </div>
            <div className='col-sm-5 welcome-section hvc'>
                <WelcomeSection
                    onModeToggle={props.onModeToggle}
                />
            </div>
        </div>
    );
}

export default SignupPage;