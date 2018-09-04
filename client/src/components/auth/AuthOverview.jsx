import React, { Component } from 'react';
import SharedSelectTab from '../shared/select_tab/SharedSelectTab';
import AuthSignIn from './AuthSignIn';
import AuthSignUp from './AuthSignUp';
import './Auth.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'sign in' };
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState({ selectedTab: tab });
  }

  renderContent(){
    if (this.state.selectedTab === 'sign in') {
      return (
        <div>
          <AuthSignIn/>
        </div>
      )
    }
    return <AuthSignUp/>
  }

  render() {
    return (
      <div>
        <SharedSelectTab
          selectedTab={this.state.selectedTab}
          updateTab={this.updateTab}
          tabs={['sign in', 'sign out']}
        />
        <div className="container-90">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Auth;
