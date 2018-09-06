import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  renderLinks(){
    if (this.props.authenticated){
      return(
        <div>
          <Link to={'/signout'}> Sign Out </Link>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to={'/signup'}> Sign Up </Link>
          <Link to={'/signin'}> Sign In </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="nav">
        <Link to={'/'}>
          <img id="nav-icon" src={require('../../assets/icons/menu-burger.png')} alt="nav-icon" />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Nav);
