import React from 'react';

export default function disasterBar(props) {
  return (
    <div className="boxes">
      <div className="unselected-box">
        <button
          onClick={props.updatePage.bind(null, false )}
          className={props.selectedPage ? null : "selected-box" }
          >
          My involvements
        </button>
      </div>
      <div className="unselected-box">
        <button
          onClick={props.updatePage.bind(null, true)}
          className={props.selectedPage ? "selected-box" : null }
          >
          All other disasters
        </button>
      </div>
    </div>
  )
}
