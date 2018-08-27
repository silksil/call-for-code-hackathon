import React from 'react';

export default function AuthBar(props) {
  return (
    <div className="sign-in-out-boxes">
      <div className="sign-in-box">
        <button
          onClick={props.updatePage.bind(null, true)}
          style={props.selectedPage ? { color: 'red' } : null}
          >
          Sign In
        </button>
      </div>
      <div className="sign-out-box">
        <button
          onClick={props.updatePage.bind(null, false )}
          style={props.selectedPage ? null : { color: 'red' }}
          >
          Sign Up
        </button>
      </div>
    </div>
  )
}
