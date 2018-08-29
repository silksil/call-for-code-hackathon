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
      <ul className='chat'>
        {this.props.chatMessages.map(chat => {
          return (
            <li key={chat.id}>
              <div className="">
                <p>{chat.otherUserName}</p>
                <img className="" src={chat.otherUserImage}/>
                <p>{chat.messages[0].sender}:</p>
                <p>{chat.messages[0].message}</p>
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
