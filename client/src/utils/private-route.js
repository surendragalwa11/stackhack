import React from 'react';
import {Route, Redirect } from 'react-router-dom';

import {useAuth} from '../context/auth';


const PrivateRoute = (props) => {
    const {isAuthenticated} = useAuth();
    const Component = props.routeComponent;
    return(
        <Route
            {...props}
            render={props => (
                isAuthenticated ?
                    <Component {...props} />
                    :
                    <Redirect to='/signin' />
            )}
        />
    )
}

export default PrivateRoute;