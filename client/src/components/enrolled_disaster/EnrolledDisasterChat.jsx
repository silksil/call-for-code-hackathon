import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchChat } from '../../store/actions/action_disasters';
import './EnrolledDisaster.css';

class EnrolledDisasterChat extends Component {
  componentDidMount() {
    this.props.fetchChat();
  }

  render() {
    if (this.props.chatMessages.length === 0) {
      return <div className="loader"> loading</div>;
    }

    return (
      <div className="container-90">
        <div className="search-box">
          <img className="search-icon" src={require('../../assets/icons/search-icon.png')} alt='search-icon' />
        </div>
        <ul>
          {this.props.chatMessages.map(chat => {
            return (
              <li key={chat.id} className="chat-card">
                <img className="user-image" src={chat.otherUserImage} alt="chat-user" />
                <div className="chat-text">
                  <p id="chat-sender">
                    {chat.messages[0].sender}:
                  </p>
                  <p className="grey" id="chat-message">{chat.messages[0].message}</p>
                  <hr />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { chatMessages: state.enrolledDisaster.chatMessages };
}

EnrolledDisasterChat.propTypes = {
  chatMessages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchChat })(EnrolledDisasterChat);
