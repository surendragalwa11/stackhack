import React, {useState} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import {AuthContext} from './context/auth';
import PrivateRoute from './utils/private-route';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import store from './state';

import {getUser, setUser} from './state/user/storage';


const App = () => {
  const existingUser = getUser();
  const [user, setAppUser] = useState(existingUser);
  
  // user context
  const setApplicationUser = (user) => {
    setUser(user);
    setAppUser(user);
  }

  return(
    <AuthContext.Provider value={{user, isAuthenticated: !!user, setAppUser: setApplicationUser}}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/signin' exact component={LandingPage} />
            <PrivateRoute path="/" exact routeComponent={HomePage} />
            <PrivateRoute path="/home" routeComponent={HomePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
