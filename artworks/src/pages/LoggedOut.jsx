import React, { useEffect } from 'react';
import './Login.css';
import { useCallback } from 'react';

export default function LoggedOut(props) {
  const { handleJwt, handleDemoUserLogin } = props;
  //----------GOOGLE sign in----------

  let clientId =
    '356359668616-vg2osoq5qutab9mrr0jvggdpdhcntja8.apps.googleusercontent.com';

  const handleCallbackResponse = useCallback(
    (response) => {
      console.log('Encoded JWT ID token: ' + response.credential);
      handleJwt(response.credential);
    },
    [handleJwt]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, [clientId, handleCallbackResponse]);

  return (
    <>
      <div className="form">
        <label>
          <p>Email</p>
          <input type="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button onClick={handleDemoUserLogin}>Log in</button>
        </div>
      </div>
      <button className="google-button">
        <i className="fa-brands fa-google"></i> <span>Sign in with Google</span>
        <div id="signInDiv"></div>
      </button>
      <button className="new-account" disabled title="coming soon">
        Create new account
      </button>
    </>
  );
}
