import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

// Auth Higher Order Component
import AuthHigherOrder from './auth/AuthHigherOrder';

// No Auth Required
import Nav from './nav/Nav';
import Home from './home/Home';
import Auth from './auth/AuthOverview';

// Auth Required
import AuthSignOut from './auth/AuthSignOut';
import Profile from './profile/Profile';
import OverviewDisasters from './overview_disasters/OverviewDisasters';
import OverviewDisastersSelected from './overview_disasters/OverviewDisastersSelected';
import EnrolledDisasterOverview from './enrolled_disaster/EnrolledDisasterOverview';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <BrowserRouter>
          <div>
            <Nav/>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/signout" component={AuthHigherOrder(AuthSignOut)} />
            <Route exact path="/profile" component={AuthHigherOrder(Profile)} />
            <Route exact path="/disasters" component={AuthHigherOrder(OverviewDisasters)} />
            <Route path="/disasters/:id" component={AuthHigherOrder(OverviewDisastersSelected)} />
            <Route path="/enrolled-disaster/:id" component={EnrolledDisasterOverview} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
