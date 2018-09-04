import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './store/reducers';

const store = createStore(reducers, {
  auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(ReduxThunk));

ReactDom.render(

  <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
