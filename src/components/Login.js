import React from 'react';
import Button from './Button';

const Login = () => (
  <div className="login-container">
    <div className="login-screen">
      <div className="login-title">
        USER AREA
      </div>

      <div className="login-form">
        <div className="control-group">
          <label className="user-label" htmlFor="login-name">USERNAME</label>
          <input id="login-name" type="text" defaultValue="" />
        </div>

        <div className="control-group">
          <label className="password-label" htmlFor="login-pass">PASSWORD</label>
          <input id="login-pass" type="password" defaultValue="" />
        </div>

        <Button color="blue" variant="big" text="LOGIN" link="account"></Button>
      </div>
    </div>
  </div>
);

export default Login