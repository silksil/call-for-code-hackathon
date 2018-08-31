import React, { Component } from 'react';
import ActiveDisasterBar from './activeDisasterBar';
import Chat from './Chat';
import Map from './Map';
import Notifications from './Notifications';

class ActiveDisasterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = { showTab: 'Notifications' };
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState({ showTab: tab });
  }

  renderContent() {
    const tab  = this.state.showTab;
    if (tab === 'Notifications') {
      return (
      <Notifications/>
      );
    }
    if (tab === 'Map') {
      return (
      <Map/>
      );
    }
    return <Chat/>;
  }


  render() {
    return (
      <div>
        <ActiveDisasterBar
          selectedTab={this.state.showTab}
          updateTab={this.updateTab}
        />
        <div className='selected-wrapper'>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}


export default ActiveDisasterOverview;
