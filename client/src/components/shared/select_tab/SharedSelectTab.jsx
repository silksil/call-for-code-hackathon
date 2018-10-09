import React from 'react';
import './SharedSelectTab.css';

export default function SharedSelectTab(props) {
  return (
    <div className="boxes">
      {props.tabs.map(tab => {
        return (
          <button
            key={tab}
            className={tab === props.selectedTab ? 'selected-box' : 'unselected-box'}
            onClick={props.updateTab.bind(null, tab )}
            >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
