import React from 'react';

export default function activeDisasterBar(props) {
  console.log(props)
  const tabs = ['Notifications', 'Map', 'Chat'];
  return (
    // <ul className='boxes'>
    //   {tabs.map(tab => {
    //     return (
    //       <li
    //         key={tab}
    //         className={props.selectedTab ? 'selected-box' : null}
    //         style={tab === props.selectedTab ? { color: 'red' } : null}
    //         onClick={props.updateTab.bind(null, tab )}
    //         >
    //         {tab}
    //       </li>
    //     );
    //   })}
    // </ul>

    <div className="boxes">
      <div className="unselected-box">
        <button
          key={'Notifications'}
          onClick={props.updateTab.bind(null, true)}
          className={props.selectedTab ? 'selected-box' : null}
        >
          NOTIFICATIONS
  </button>
      </div>
      <div className="unselected-box">
        <button
          key={'Map'}
          onClick={props.updateTab.bind(null, false)}
          className={props.selectedTab ? null : "selected-box"}
        >
          MAP
  </button>
      </div>
      <div className="unselected-box">
        <button
          key={'Chat'}
          onClick={props.updateTab.bind(null, false)}
          className={props.selectedTab ? null : "selected-box"}
        >
          CHAT
  </button>
      </div>
    </div>
  );
}
