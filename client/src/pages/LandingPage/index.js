import React, {useState} from 'react';

import {Redirect} from 'react-router-dom';

import {useAuth} from '../../context/auth';


import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';

const LandingPage = (props) => {
    const [isLoginPage, setLoginPage] = useState(true);
    const {isAuthenticated} = useAuth();
    
    if(isAuthenticated) {
        return(<Redirect to='/home' />)
    }
    return(
        <React.Fragment key={isAuthenticated}>
            {
                isLoginPage ?
                    <LoginPage
                        onModeToggle={setLoginPage}
                    />
                    :
                    <SignupPage
                        onModeToggle={setLoginPage}
                    />
            }
        </React.Fragment>
    );
}

export default LandingPage;