import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="dropdown">
      <button className="dropdown-btn">
        <i className="fas fa-user"></i>
      </button>
      <div className="dropdown-content">
        <li>Account</li>
        <li>Profile</li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </div>
    </div>
  ) : (
    <div className="actions">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Login</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div></div>
      <h1 className="logo">Maven</h1>
      <div>{display}</div>
    </header>
  );
};