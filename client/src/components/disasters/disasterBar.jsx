import React from 'react';

export default function disasterBar(props) {
  return (
    <div>
      <div className="users-disasters-box">
        <button
          onClick={props.updatePage.bind(null, false )}
          style={props.selectedPage ? null : { color: 'red' }}
          >
          My involvements
        </button>
      </div>
      <div className="all-disasters-box">
        <button
          onClick={props.updatePage.bind(null, true)}
          style={props.selectedPage ? { color: 'red' } : null}
          >
          All other disasters
        </button>
      </div>
    </div>
  )
}
