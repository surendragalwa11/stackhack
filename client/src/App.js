import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import store from './state';

const App = () => {
  return(
    <Provider store={store}>
      <div className='app-container container-fluid'>
        <BrowserRouter>
          <Switch>
          <Route path="/home" exact component={HomePage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
