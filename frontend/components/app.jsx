import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);