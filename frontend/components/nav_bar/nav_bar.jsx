import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <Dropdown logout={logout}/>
  ) : (
    <div className="actions">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Sign In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div></div>
      <h1 className="logo">
        <Link to="/">Maven</Link>
      </h1>
      <div className="actions">{display}</div>
    </header>
  );
};