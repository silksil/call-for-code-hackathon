import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDisaster } from '../../store/actions/action_disasters';

class OverviewDisastersSelected extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDisaster(id);
  }

  render() {
    const { disaster } = this.props;
    if (!disaster) {
      return <div className="loader">loading</div>;
    }

    return (
      <div className="container-90">
        <div className="image-card-container">
          <img className="image-picture" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/1534707268-Lombok-earthquake-960x540.jpg" alt="disaster-{disaster.name}"/>
          <div className="image-info">
            <div className={`image-disaster-level-card ${disaster.disasterLevel.toLowerCase()}`}>
              <p className="image-disaster-level-text">
                {disaster.disasterLevel}
              </p>
            </div>
            <h2 className="image-disaster-name">{disaster.name}</h2>
            <p className="image-disaster-name">{disaster.activeVolunteers}
              active volunteers
            </p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Description</h3>
          <hr className="card-line"/>
          <p className="grey">{disaster.description}</p>
        </div>
        <div className="card" id="card-map">
          <div id="card-map-title">
            <h3 className="card-title">Location</h3>
            <hr className="card-line"/>
          </div>
          <img id="map" src={require('../../assets/images/map.png')} alt="map" />
          <div id="map-filler" />
        </div>
        <div className="card">
          <h3 className="card-title">Should you go there to help?</h3>
          <hr className="card-line" />
          {disaster.advice ? <div><span className="dot dot-yes"></span><p>Yes</p> </div> : <div><span className="dot dot-no"></span><p>No</p></div>}
          <p className="grey">{disaster.goThereComment}</p>
        </div>
        <div className="card">
          <h3 className="card-title">How can you help</h3>
          <hr className="card-line"/>
          <div className="help-options">
            <div className="icon-box">
              <img className="help-icon" src={require('../../assets/icons/money.png')} alt="donate money" />
              <p className="grey help-text">Donate Money</p>
            </div>
            <div className="icon-box">
              <img className="help-icon" src={require('../../assets/icons/on-sight.png')} alt="help on sight" />
              <p className="grey help-text">Help on Sight</p>
            </div>
            <div className="icon-box">
              <img className="help-icon" src={require('../../assets/icons/supplies.png')} alt="donate money" />
              <p className="grey help-text">Donate Supplies</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ disasters }, ownProps) {
  return { disaster: disasters[ownProps.match.params.id] };
}

OverviewDisastersSelected.propTypes = { disaster: PropTypes.object };

export default connect(mapStateToProps, { fetchDisaster })(OverviewDisastersSelected);
