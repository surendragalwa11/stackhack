import React, {useState} from 'react';

import {Redirect} from 'react-router-dom';


import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';

const LandingPage = (props) => {
    const [isLoginPage, setLoginPage] = useState(true);
    const isLoggedIn = false;
    if(isLoggedIn) {
        return(<Redirect to='/home' />)
    }
    return(
        <React.Fragment>
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