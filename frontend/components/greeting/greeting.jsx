import React from 'react';
import { Link, Redirect } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => (
    <hgroup className="header-group">
       <Link to="/" className="header-link">
        <h1 className='header-logo'>Tomobook</h1>
      </Link>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : <Redirect to="/login" />;
};


export default Greeting;
