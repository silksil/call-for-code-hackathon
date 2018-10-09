import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Nav.css';

class Nav extends Component {
  // renderLinks() {
  //   if (this.props.authenticated) {
  //     return (
  //       <div>
  //         <Link to={'/signout'}> Sign Out </Link>
  //       </div>
  //     );
  //   }
  //
  //   return (
  //     <div>
  //       <Link to={'/signup'}> Sign Up </Link>
  //       <Link to={'/signin'}> Sign In </Link>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="nav-div">
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

Nav.propTypes = {
  auth: PropTypes.string
};

export default connect(mapStateToProps)(Nav);
