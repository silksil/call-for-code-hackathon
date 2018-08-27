import React, { Component } from 'react';
import AuthBar from './authBar';
import SignIn from './SignIn';
import SignUp from './SignUp';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { showSignIn: true };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(page) {
    this.setState({ showSignIn: page });
  }

  renderContent(){
    if (this.state.showSignIn ) {
      return (
        <div>
          <SignIn/>
        </div>
      )
    }
    return <SignUp/>
  }


  render() {
    return (
      <div>
        <AuthBar
          selectedPage={this.state.showSignIn}
          updatePage={this.updatePage}
        />
        {this.renderContent()}
      </div>
    )
  }
}

export default Auth;
