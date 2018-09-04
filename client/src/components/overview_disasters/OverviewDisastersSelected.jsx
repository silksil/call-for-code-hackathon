import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDisaster } from'../../store/actions/action_disasters';

class ShowDisaster extends Component {
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
      <div>
        <div className="card-container">
          <img className="card-image" src="//placehold.it/400" alt="disaster-{disaster.name}"/>
          <div className="card-disaster-info">
              <div className="card-disaster-level">
                <h3 className="text-disaster-level"> {disaster.disasterLevel}</h3>
              </div>
              <h2 className="text-disaster-name">{disaster.name}</h2>
              <h3 className="text-volunteer-amount">{disaster.activeVolunteers} active volunteers</h3>
          </div>
        </div>
        <div>
          <h3>Description</h3>
          <p>{disaster.description}</p>
        </div>
        <div>
          <h3>Location</h3>
        </div>
        <div>
          <h3>Should you go there to help?</h3>
          {disaster.advice ? <div><span class="dot dot-yes"></span> <p>'Yes'</p> </div> : <div><span class="dot dot-no"></span> <p>'No'</p> </div>}
        </div>
        <div>
          <h3>How can I help?</h3>
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

export default connect(mapStateToProps, { fetchDisaster })(ShowDisaster);
