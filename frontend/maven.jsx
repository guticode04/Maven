import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';

//For testing. Don't forget to remove!
import * as trackActions from './actions/track_actions';
import { selectAllTracks }from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const store = createStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.trackActions = trackActions;
  window.selectAllTracks = selectAllTracks;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})