import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import CreateProfile from './profile/CreateProfile';
import Test from './test/Test';

import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signout" component={SignOut} />
            <Route exact path="/feature" component={Test} />
            <Route exact path="/profile" component={CreateProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
