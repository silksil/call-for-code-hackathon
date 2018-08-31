import React from 'react';
import { Link } from 'react-router-dom';

export default function selectedDisasters(props) {
  function renderContent(disasters){
    if (disasters.length === 0) {
      return <div className="loader"> loading</div>
    }

    return (
      <ul className='disasters'>
        {disasters.map(disaster => {
          const link = disaster.active ? 'active-disaster' : 'disasters';
          const level = disaster.disasterLevel.toLowerCase() === 'severe' ? 'level-severe' : 'level-moderate';
          console.log(level)
          return (
            <li ckey={disaster.id}>
                <Link to={`/${link}/${disaster.id}`}>
                  <div className="card-container">
                    <img className="card-image" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/1534707268-Lombok-earthquake-960x540.jpg" alt="disaster-{disaster.name}"/>
                    <div className="card-disaster-info">
                        <div className="card-disaster-level {level}">
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
