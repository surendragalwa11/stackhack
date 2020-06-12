import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

import {socialLogin} from '../../state/user/api';

const SocialLogin = (props) => (
    <div className='social-acs'>
        <img
            src='/icons/fb-icon.png'
            alt='fb'
            className='mr10'
            onClick={() => props.socialLogin('fb')}
        />
        <GoogleLogin
            clientId="xxxxxxx"
            render={renderProps => (
                <img
                    src='/icons/google-icon.png'
                    alt='google'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                />
            )}
            onSuccess={(res) => console.log(res)}
            onFailure={(res) => console.log(res)}
            // onSuccess={() => props.socialLogin('fb', true)}
            // onFailure={() => props.socialLogin('fb', false)}
            cookiePolicy={'single_host_origin'}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    socialLogin: (type) => dispatch(socialLogin(type)),
});

export default connect(null , mapDispatchToProps)(SocialLogin);