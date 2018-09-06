import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChat} from'../../store/actions/action_disasters';
import './EnrolledDisaster.css';


class Notifications extends Component {
  componentDidMount() {
    this.props.fetchChat();
  }
  render() {
    if (this.props.chatMessages.length === 0) {
      return <div className="loader"> loading</div>
    }

    return (
      <div className='container-90'>
        <div className='search-box'>
          <img className="search-icon" src={require('../../assets/icons/search-icon.png')} />
        </div>
        <ul>
          {this.props.chatMessages.map(chat => {
            return (
              <li key={chat.id} className='chat-card'>
              <img className="user-image" src={chat.otherUserImage}/>
                <div className="chat-text">
                  {/* <p>{chat.otherUserName}</p> */}
                  <p id="chat-sender">{chat.messages[0].sender}:</p>
                  <p className='grey' id="chat-message">{chat.messages[0].message}</p>
                  <hr/>
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
  return { chatMessages: state.chatMessages };
}


export default connect(mapStateToProps, { fetchChat })(Notifications);
