import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users';

export default function SignInAuth({ setCurrentUser }) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const history = useHistory();

  const Submit = async (e) => {
    e.preventDefault();

    const resp2 = await signInUser(signInEmail, signInPassword);
    setCurrentUser(resp2.email);
    history.push('/');
  };
  return (
    <div>
      <form onSubmit={Submit}>
        Sign In
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
  );
}
