import React from 'react';

export default function AuthBar(props) {
  return (
    <div className="sign-in-out-boxes">
      <div className="sign-out-box">
        <button
          onClick={props.updatePage.bind(null, true)}
          className={props.selectedPage ? 'sign-in-box' : null}
          >
          SIGN IN
        </button>
      </div>
      <div className="sign-out-box">
        <button
          onClick={props.updatePage.bind(null, false )}
          className={props.selectedPage ? null : "sign-in-box"}
          >
          SIGN UP
        </button>
      </div>
    </div>
  )
}
