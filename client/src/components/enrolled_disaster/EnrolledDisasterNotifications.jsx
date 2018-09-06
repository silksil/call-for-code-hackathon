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
      <div className='container-90'>
        <ul className='notifications'>
          {this.props.notifications.map(notifications => {
            return (
              <li key={notifications.id}>
                <div className="card">
                  <img className="organization-image" src={notifications.organizationImage} />
                  <div className="organization-name">
                  <p> {notifications.organization}</p>
                  <p className="time-posted grey"> 2 min ago</p>
                  </div>
                  <p className='notification-message grey'>{notifications.message}</p>
                  <img className="message-image" src={notifications.messageImage} />
                  <p className="responses grey">{notifications.responses}
                  <img className="message-icon" src={require('../../assets/icons/message-grey.png')} /></p>
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
  return { notifications: state.notifications };
}


export default connect(mapStateToProps, { fetchNotifications })(Notifications);
