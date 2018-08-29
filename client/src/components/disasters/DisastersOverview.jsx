import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisasterBar from './disasterBar';
import SelectedDisasters from './selectedDisasters.jsx'
import { fetchDisasters } from'../../actions/action_disasters';
import '../../style/disasters.css';

class DisastersOverview extends Component {
  constructor(props) {
    super(props);
    this.state = { showAllDisasters: true };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(boolean) {
    this.setState({ showAllDisasters: boolean });
  }

  componentDidMount() {
    this.props.fetchDisasters();
  }

  renderContent(){
    const allDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === false);
    const usersDisasters = Object.values(this.props.disasters).filter(disaster => disaster.active === true);

    if (this.state.showAllDisasters) {
      return (
        <SelectedDisasters
          selectedPage={this.state.showAllDisasters}
          disasters={allDisasters}
        />
      )
    }
    return (
      <SelectedDisasters
        selectedPage={this.state.showAllDisasters}
        disasters={usersDisasters}
      />
    )
  }

  render() {
    return (
      <div>
        <DisasterBar
          selectedPage={this.state.showAllDisasters}
          updatePage={this.updatePage}
        />
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { disasters: state.disasters };
}

export default connect(mapStateToProps, { fetchDisasters })(DisastersOverview);
