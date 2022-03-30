import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function SignInAuth({ setCurrentUser }) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const resp2 = await signInUser(signInEmail, signInPassword);
      setCurrentUser(resp2.email);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <div>
        {error && <p>{error}</p>}
        <h1>Sign In</h1>
        <form onSubmit={Submit}>
          <label>
            Email:
            <input
              type="email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            />
          </label>
          <button>Sign-In</button>
        </form>
      </div>
      <div className="new-user">
        New User? <Link to="/signUpAuth">Sign Up Here!</Link>
      </div>
    </>
  );
}
