import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../../store/actions/action_disasters';
import './EnrolledDisaster.css';

class EnrolledDisasterNotifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    if (this.props.notifications.length === 0) {
      return <div className="loader">loading</div>;
    }
    return (
      <div className="container-90">
        <ul className="notifications">
          {this.props.notifications.map(notifications => {
            return (
              <li key={notifications.id}>
                <div className="card">
                  <div>
                    <img className="organization-image" src={notifications.organizationImage} alt="notification-organization" />
                  </div>
                  <div className="organization-name">
                  <p> {notifications.organization}</p>
                  <p className="time-posted grey"> 2 min ago</p>
                  </div>
                  <p className="notification-message grey">{notifications.message}</p>
                  <img className="message-image" src={notifications.messageImage} alt="notification-message"/>
                  <p className="responses grey">
                    {notifications.responses }
                  </p>
                  <div>
                    <img className="message-icon" src={require('../../assets/icons/message-grey.png')} alt="notification-icon" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { notifications: state.enrolledDisaster.notifications };
}

EnrolledDisasterNotifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchNotifications })(EnrolledDisasterNotifications);
