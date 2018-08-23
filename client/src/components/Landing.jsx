import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';



class Landing extends Component {

  render() {
    return (
      <div className="center-text">
        <h1>
         <span className="big"> Respond. </span><span className="green big"> Smarter</span>
        </h1>
        <h2 className="grey"> Connecting volunteers throughout the world to
  respond smarter to natural disasters.</h2>
        <div>
          <ReactSwipe  className="carousel" swipeOptions={{continuous: false}}>
               <div className="swipe">PANE 1</div>
               <div className="swipe">PANE 2</div>
               <div className="swipe">PANE 3</div>
          </ReactSwipe>
          <div>
          </div>
          <Link className="btn-green" to={'/signup'}>Sign Up</Link>
          <Link className="btn-white" to={'/signin'}>Sign In</Link>
        </div>
      </div>
    )
  }
}

export default Landing;



//
