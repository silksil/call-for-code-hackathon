import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../store/actions/action_disasters';
import './EnrolledDisaster.css';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    if (this.props.notifications.length === 0) {
      return <div className="loader">loading</div>
    }
    return (
      <ul className='notifications'>
        {this.props.notifications.map(notifications => {
          return (
            <li key={notifications.id}>
              <div className="notification-card">
                <img className="organization-image" src={notifications.organizationImage} />
                <div className="organization-name">
                <p> {notifications.organization}</p>
                <p className="time-posted"> 2 min ago</p>
                </div>
                <p>{notifications.message}</p>
                <img className="message-image" src={notifications.messageImage} />
              </div>
            </li>
          );
        })}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { notifications: state.notifications };
}
// <p className="responses">{notifications.responses} <img className="message-icon" src={require('../public/icons/message-icon.png')} /></p>


export default connect(mapStateToProps, { fetchNotifications })(Notifications);
