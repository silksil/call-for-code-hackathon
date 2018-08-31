import React from 'react';

export default function AuthBar(props) {
  return (
    <div className="boxes">
      <div className="unselected-box">
        <button
          onClick={props.updatePage.bind(null, true)}
          className={props.selectedPage ? 'selected-box' : null}
          >
          SIGN IN
        </button>
      </div>
      <div className="unselected-box">
        <button
          onClick={props.updatePage.bind(null, false )}
          className={props.selectedPage ? null : "selected-box"}
          >
          SIGN UP
        </button>
      </div>
    </div>
  )
}
