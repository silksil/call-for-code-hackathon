import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDisasters } from'../../actions/action_disasters';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ShowDisasters extends Component {
  componentDidMount() {
    this.props.fetchDisasters();
  }

  renderUserDisasters(disasters){
    const usersDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === true)
    if (usersDisasters.length === 0) {
      return <div className="loader"> loading</div>
    }
    return usersDisasters.map(disaster => {
      return (
        <div>
          <li className="list-group-item" key={disaster.id}>
            <Link to={`/active-disasters/${disaster.id}`}>
              {disaster.name}
            </Link>
          </li>
        </div>
      );
    })
  }

  renderAllOtherDisasters(){
    const allOtherDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === false)
    if (allOtherDisasters.length === 0) {
      return <div className="loader"> loading</div>
    }
    return allOtherDisasters.map(disaster => {
      return (
        <div>
          <li className="list-group-item" key={disaster.id}>
            <Link to={`/disasters/${disaster.id}`}>
              {disaster.name}
            </Link>
          </li>
        </div>
      );
    });
  }


  render() {
    return (
      <div className="container">
        <h1> My Disasters </h1>
        <ul className="list-group">
          {this.renderUserDisasters()}
        </ul>

        <h1> All disasters </h1>
        <ul className="list-group">
          {this.renderAllOtherDisasters()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { disasters: state.disasters };
}

export default connect(mapStateToProps, { fetchDisasters })(ShowDisasters);
