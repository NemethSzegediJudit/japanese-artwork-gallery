import React from "react";
import Page from "../layout/Page";

import "./Login.css";

export default function Login() {
  return (
    <Page>
      <div className="login-wrapper">
        <form>
          <label>
            <p>Email</p>
            <input type="email" size="30" multiple required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" size="10" required />
          </label>
          <div>
            <button type="submit" className="login">
              Log in
            </button>
          </div>
        </form>
        <button className="new-account">Create new account</button>
      </div>
    </Page>
  );
}
