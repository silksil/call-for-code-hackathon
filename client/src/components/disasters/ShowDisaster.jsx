import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDisaster } from'../../actions/action_disasters';

class ShowDisaster extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDisaster(id);
  }

  renderSkills(skills) {
    return skills.map(skill=> {
      return (
        <li key={skill}>{skill}</li>
      )
    })
  }

  render(){
    const { disaster } = this.props;
    if(!disaster) {
      return <div className="loader">loading</div>
    }
    return (
      <div>
          <h3>{disaster.country}</h3>
          <h3>{disaster.disasterType}</h3>
          <ul>{this.renderSkills(disaster.skillsNeeded)}</ul>
      </div>
    );
  }

}

function mapStateToProps( { disasters }, ownProps) {
 return { disaster: disasters[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchDisaster })(ShowDisaster);
