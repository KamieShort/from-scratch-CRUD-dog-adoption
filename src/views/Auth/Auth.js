import React, { useState } from 'react';
import { signInUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const resp = await signInUser(email, password);
    setCurrentUser(resp.email);
  };
  return (
    <div>
      <h2>Sign In</h2>

      <form onSubmit={submit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign-In</button>
      </form>
    </div>
  );
}
