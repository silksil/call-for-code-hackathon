import React from 'react';

export default function activeDisasterBar(props) {
  console.log(props)
  const tabs = ['Notifications', 'Map', 'Chat'];
  return (
    <div className='boxes'>
      {tabs.map(tab => {
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
