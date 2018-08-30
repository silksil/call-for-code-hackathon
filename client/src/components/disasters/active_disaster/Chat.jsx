import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChat} from'../../../actions/action_disasters';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchChat();
  }
  render() {
    if (this.props.chatMessages.length === 0) {
      return <div className="loader"> loading</div>
    }
    return (
      <ul className='chat-card'>
        {this.props.chatMessages.map(chat => {
          return (
            <li key={chat.id}>
            <img className="user-image" src={chat.otherUserImage}/>
              <div className="chat-text">
                {/* <p>{chat.otherUserName}</p> */}
                <p id="chat-sender">{chat.messages[0].sender}:</p>
                <p id="chat-message">{chat.messages[0].message}</p>
                <hr/>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { chatMessages: state.chatMessages };
}


export default connect(mapStateToProps, { fetchChat })(Notifications);
