import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers';

export default ({ children, initialState = { auth: { authenticated: localStorage.getItem('token')} } }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise, ReduxThunk));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};
