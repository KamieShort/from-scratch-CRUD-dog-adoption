import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const logoutClick = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="header">
      <NavLink className="nav" exact to="/">
        Home
      </NavLink>

      {currentUser && (
        <NavLink className="nav" exact to="/dogs/new">
          Add Dog
        </NavLink>
      )}

      {currentUser ? (
        <button className="nav" onClick={logoutClick}>
          Logout
        </button>
      ) : (
        <NavLink className="nav" exact to="/signInAuth">
          Sign In
        </NavLink>
      )}
    </div>
  );
}
