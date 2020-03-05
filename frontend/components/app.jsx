import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import LoginContainer from './session/login_container';

export default () => (
  <Switch>
    <Route exact path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    {/* <Route path="/" component={ErrorPage} /> */}
  </Switch>
);