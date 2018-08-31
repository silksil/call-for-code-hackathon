import React from 'react';
import { Link } from 'react-router-dom';

export default function selectedDisasters(props) {
  function renderContent(disasters){
    if (disasters.length === 0) {
      return <div className="loader"> loading</div>
    }

    return (
      <ul className='languages'>
        {disasters.map(disaster => {
          let link = disaster.active ? 'active-disaster' : 'disasters';
          return (
            <li key={disaster.id}>
                <Link to={`/${link}/${disaster.id}`}>
                  <div className="card-container">
                    <img className="card-image" src="//placehold.it/400" alt="disaster-{disaster.name}"/>
                    <div className="card-disaster-info">
                        <div className="card-disaster-level">
                          <p className="text-disaster-level"> {disaster.disasterLevel}</p>
                        </div>
                        <p className="text-disaster-name">{disaster.name}</p>
                        <p className="text-volunteer-amount">{disaster.activeVolunteers} active volunteers</p>
                    </div>
                  </div>
                </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div>
      {renderContent(props.disasters)}
    </div>
  )
}
