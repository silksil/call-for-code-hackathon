import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications} from'../../../actions/action_disasters';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }



  render() {
    if (this.props.notifications.length === 0) {
      return <div className="loader"> loading</div>
    }
    return (
      <ul className='notifications'>
        {this.props.notifications.map(notifications => {
          return (
            <li key={notifications.id}>
              <div className="">
                <img className="" src={notifications.organizationImage}/>
                <p>{notifications.organization}</p>
                <p>{notifications.message}</p>
                  <img className="" src={notifications.messageImage}/>
                <p>{notifications.responses}</p>
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


export default connect(mapStateToProps, { fetchNotifications })(Notifications);
