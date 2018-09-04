import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

// No Auth Required
import Header from './header/Header';
import Home from './home/Home';
import Auth from './auth/AuthOverview';
import AuthSignUp from './auth/AuthSignUp';
import AuthSignIn from './auth/AuthSignIn';

// Auth Required
import AuthSignOut from './auth/AuthSignOut';
import CreateProfile from './profile/CreateProfile';
import OverviewDisasters from './overview_disasters/OverviewDisasters';
import OverviewDisastersSelected from './overview_disasters/OverviewDisastersSelected';
import EnrolledDisasterOverview from './enrolled_disaster/EnrolledDisasterOverview';

import '../style/main.css';

class App extends Component {

  render() {
    return (
      <div id="wrapper">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/signup" component={AuthSignUp} />
            <Route exact path="/signin" component={AuthSignIn} />
            <Route exact path="/signout" component={AuthSignOut} />
            <Route exact path="/profile" component={CreateProfile} />
            <Route exact path="/disasters" component={OverviewDisasters} />
            <Route path="/disasters/:id" component={OverviewDisastersSelected} />
            <Route path="/active-disaster/:id" component={EnrolledDisasterOverview} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
