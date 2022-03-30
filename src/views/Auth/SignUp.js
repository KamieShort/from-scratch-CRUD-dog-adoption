import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUser } from '../../services/users';

export default function SignUpAuth({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const history = useHistory();

  const signUpSubmit = async (e) => {
    e.preventDefault();

    const resp = await signUpUser(signUpEmail, signUpPassword);
    setCurrentUser(resp.email);
    history.push('/');
  };
  return (
    <div>
      <form onSubmit={signUpSubmit}>
        Sign Up
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
