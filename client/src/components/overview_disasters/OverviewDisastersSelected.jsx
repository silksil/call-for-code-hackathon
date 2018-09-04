import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDisaster } from'../../store/actions/action_disasters';

class OverviewDisasterSelected extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDisaster(id);
  }

  render(){
    const { disaster } = this.props;
    if (!disaster) {
      return <div className="loader">loading</div>
    }
    return (
      <div className="container-90">
        <div className="image-card-container">
          <img className="image-picture" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/1534707268-Lombok-earthquake-960x540.jpg" alt="disaster-{disaster.name}"/>
          <div className="image-info">
              <div className={`image-disaster-level-card ${disaster.disasterLevel.toLowerCase()}`}>
                <p className="image-disaster-level-text"> {disaster.disasterLevel}</p>
              </div>
              <h2 className="image-disaster-name">{disaster.name}</h2>
              <p className="image-disaster-name">{disaster.activeVolunteers} active volunteers</p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Description</h3>
          <hr className="card-line"/>
          <p>{disaster.description}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Location</h3>
          <hr className="card-line"/>
          <p>{disaster.description}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Should you go there to help?</h3>
          <hr className="card-line"/>
          {disaster.advice ? <div><span class="dot dot-yes"></span> <p>'Yes'</p> </div> : <div><span class="dot dot-no"></span> <p>'No'</p> </div>}
        </div>
        <div className="card">
          <hr className="card-line"/>
          <h3 className="card-title">How can I help?</h3>
          <div>
            <span>icon</span>
            <p>Donate money</p>
          </div>
          <div>
            <span>icon</span>
            <p>Donate supplies</p>
          </div>
          <div>
            <span>icon</span>
            <p>Help on Sight</p>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps( { disasters }, ownProps) {
  return { disaster: disasters[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchDisaster })(OverviewDisasterSelected);
