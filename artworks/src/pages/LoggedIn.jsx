import React from 'react';
import './Login.css';

export default function LoggedIn(props) {
  const { user, setUser } = props;

  function handleSignOut() {
    setUser({});
    window.localStorage.removeItem('artworkToken');
  }

  return (
    <>
      <div className="sign-in-as">
        <img src={user.picture} alt="user" />
        <div>Signed in as</div>
        <h3>{user.name}</h3>
      </div>
      <button className="sign-out" onClick={handleSignOut}>
        Sign out
      </button>
    </>
  );
}
