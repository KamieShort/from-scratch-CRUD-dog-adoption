import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  setCurrentUser(null);
  return (
    <div className="header">
      <NavLink className="nav" exact to="/">
        Home
      </NavLink>
      {!currentUser && (
        <NavLink className="nav" exact to="/dogs/new">
          Add Dog
        </NavLink>
      )}
      {!currentUser && (
        <NavLink className="nav" exact to="/signInAuth">
          Sign In
        </NavLink>
      )}
      {!currentUser && (
        <NavLink className="nav" exact to="/signUpAuth">
          Sign Up
        </NavLink>
      )}
    </div>
  );
}
