import React from 'react';

export default function activeDisasterBar(props) {
  console.log(props)
  const tabs = ['Notifications', 'Map', 'Chat'];
  return (
    <ul className='group'>
      {tabs.map(tab => {
        return (
          <li
            key={tab}
            style={tab === props.selectedTab ? { color: 'red' } : null}
            onClick={props.updateTab.bind(null, tab )}
            >
            {tab}
          </li>
        );
      })}
    </ul>
  );
}
