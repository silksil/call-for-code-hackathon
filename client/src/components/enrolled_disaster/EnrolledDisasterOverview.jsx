import React, { Component } from 'react';
import SharedSelectTab from '../shared/select_tab/SharedSelectTab';
import Chat from './EnrolledDisasterChat';
import Map from './EnrolledDisasterMap';
import Notifications from './EnrolledDisasterNotifications';

class ActiveDisasterOverview extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'notifications' };
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState({ selectedTab: tab });
  }

  renderContent() {
    const tab  = this.state.selectedTab;
    if (tab === 'notifications') {
      return (
      <Notifications/>
      );
    }
    if (tab === 'map') {
      return (
      <Map/>
      );
    }
    return <Chat/>;
  }

  render() {
    return (
      <div>
        <SharedSelectTab
          selectedTab={this.state.selectedTab}
          updateTab={this.updateTab}
          tabs={['notifications', 'map', 'chat']}
        />
        <div className='selected-wrapper'>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}


export default ActiveDisasterOverview;
