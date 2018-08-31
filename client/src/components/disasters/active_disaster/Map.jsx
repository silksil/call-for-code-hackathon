import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMap} from'../../../actions/action_disasters';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchMap();
  }

  render() {
    return (
      <div>
       Map
      </div>
    )
  }
}

export default connect(null, { fetchMap })(Notifications);
