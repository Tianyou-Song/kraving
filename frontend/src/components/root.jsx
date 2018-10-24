import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/routes_api_util';

import SplashIndex from './splash/splash_index';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container.jsx';

const Root = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SplashIndex} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Root;
