import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className="center-text full-screen">
      <div id="homepage-header">
        <h1 className="white extra-big"> FirstConnect</h1>
        <h2 className="white" id="homepage-subtitle"> Connecting first responders throughout the world to respond smarter to natural disasters.</h2>
      </div>
      <div id="homepage-buttons">
        <Link className="btn btn-blue" id="btn-homepage" to={'/auth'}>Sign Up</Link>
        <Link className="btn" id="btn-homepage" to={'/auth'}>Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
