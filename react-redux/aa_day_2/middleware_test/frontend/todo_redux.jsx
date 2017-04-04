import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const addLoggingToDispatch = ({ dispatch, getState }) => next => action => {
  console.log('Old State: ', getState())
  console.log('Action:', action)
  next(action)
  console.log('New State:', getState())
}

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch
  middlewares.forEach(middleware =>
    dispatch = middleware(store)(dispatch)
  )

  return Object.assign({}, store, { dispatch })
}

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = applyMiddlewares(
    configureStore(preloadedState),
    addLoggingToDispatch
  )

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
