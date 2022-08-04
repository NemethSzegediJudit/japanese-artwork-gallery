import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Page from "../layout/Page";

import "./Login.css";
import { useCallback } from "react";

export default function Login(props) {
  const { user, setUser } = props;
  //----------GOOGLE sign in----------

  let clientId =
    "356359668616-vg2osoq5qutab9mrr0jvggdpdhcntja8.apps.googleusercontent.com";

  const handleCallbackResponse = useCallback(
    (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
      let userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
    },
    [setUser]
  );

  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [clientId, handleCallbackResponse]);

  return (
    <Page>
      <div className="login-wrapper">
        {Object.keys(user).length !== 0 && (
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
        )}
        {Object.keys(user).length === 0 && (
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
                <button>Log in</button>
              </div>
            </div>
            <button className="new-account">Create new account</button>
            <button className="google-button">
              <i className="fa-brands fa-google"></i>{" "}
              <span>Sign in with Google</span>
            </button>
          </>
        )}
        <div id="signInDiv"></div>
      </div>
    </Page>
  );
}
