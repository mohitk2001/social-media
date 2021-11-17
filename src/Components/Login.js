import React from "react";
import { useHistory } from "react-router";
import "./Login.css";
function Login() {
    const history=useHistory()
  return (
    <div className="login">
      <div className="login_content">
        <h2>Login</h2>
        <p>Login to this awesome application</p>
        <div className="login_details">
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button className="user_login_button">LOGIN</button>
        <p>Don't have an account ? <strong onClick={()=>{history.push("/register")}}>Register</strong></p>
      </div>
    </div>
  );
}

export default Login;
