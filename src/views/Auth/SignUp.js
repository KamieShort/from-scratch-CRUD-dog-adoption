import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUser } from '../../services/users';
import './Auth.css';

export default function SignUpAuth({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const signUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUpUser(signUpEmail, signUpPassword);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Sign Up</h1>
      <form className="signupform" onSubmit={signUpSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
        </label>
        <button>Sign-Up</button>
      </form>
    </div>
  );
}
