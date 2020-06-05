import React, {useState} from 'react';

import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';

const LandingPage = (props) => {
    const [isLoginPage, setLoginPage] = useState(true);
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