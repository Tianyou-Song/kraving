import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/routes_api_util';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './google_map/search';
import IndexContainer from './index_page/index_container';
import BusinessShowContainer from './business_show/business_show';
import BusinessIndexContainer from './business_index/business_index_container';

const Root = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={IndexContainer} />
      <Route exact path="/maps" component={SearchContainer} />
      <Route exact path="/:businessId" component={BusinessShowContainer} />
      <Route exact path="/search/:searchTerm" component={BusinessIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Root;
