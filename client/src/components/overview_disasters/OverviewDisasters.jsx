import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SharedSelectTab from '../shared/select_tab/SharedSelectTab';
import OverviewDisastersTab from './OverviewDisastersTab';
import { fetchDisasters } from '../../store/actions/action_disasters';
import './OverviewDisasters.css';

class OverviewDisasters extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'my involvements' };
    this.updateTab = this.updateTab.bind(this);
  }

  componentDidMount() {
    this.props.fetchDisasters();
  }

  updateTab(tab) {
    this.setState({ selectedTab: tab });
  }

  renderContent() {
    const allDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === false);
    const usersDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === true);

    if (this.state.selectedTab === 'all disasters') {
      return (
        <OverviewDisastersTab
          selectedPage={this.state.selectedTab}
          disasters={allDisasters}
        />
      );
    }
    return (
      <OverviewDisastersTab
        selectedPage={this.state.selectedTab}
        disasters={usersDisasters}
      />
    );
  }

  render() {
    return (
      <div>
        <SharedSelectTab
          selectedTab={this.state.selectedTab}
          updateTab={this.updateTab}
          tabs={['my involvements', 'all disasters']}
        />
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { disasters: state.disasters };
}

OverviewDisasters.propTypes = { disasters: PropTypes.object.isRequired };

export default connect(mapStateToProps, { fetchDisasters })(OverviewDisasters);
