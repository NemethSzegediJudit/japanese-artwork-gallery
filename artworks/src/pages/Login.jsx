import React from "react";
import Page from "../layout/Page";
import "./Login.css";

export default function Login() {
  return (
    <Page>
      <div className="login-wrapper">
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
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
