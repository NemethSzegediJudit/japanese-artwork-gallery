import React from 'react';
import Page from '../layout/Page';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import './Login.css';

export default function Login(props) {
  const { user, setUser, handleJwt, handleDemoUserLogin } = props;

  return (
    <Page>
      <div className="login-wrapper">
        {Object.keys(user).length === 0 ? (
          <LoggedOut
            handleJwt={handleJwt}
            handleDemoUserLogin={handleDemoUserLogin}
          />
        ) : (
          <LoggedIn user={user} setUser={setUser} />
        )}
      </div>
    </Page>
  );
}
