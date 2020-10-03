import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import LoginContainer from './session/login_container';
import ErrorPage from './error_page/error_page';
import TrackIndexContainer from '../components/tracks/tracks_index_container';
import TrackFormContainer from '../components/tracks/track_form_container';
import TrackShowContainer from '../components/tracks/track_show_container';
import LowerNavBar from '../components/nav_bar/lower_nav_bar';
import Footer from './footer/footer';
import AnnotationShow from './annotations/annotation_show';

export default () => (
  <> 
    <NavBarContainer />
    <LowerNavBar />
    <Switch>
      <Route exact path="/" component={TrackIndexContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/tracks/new" component={TrackFormContainer} />
      <Route path="/tracks/:trackId" component={TrackShowContainer} />
      {/* <Route path="/tracks/:trackId/;annotationId" component={AnnotationShow} /> */}
      <Route component={ErrorPage} />
    </Switch>
    <Footer />
  </>
);