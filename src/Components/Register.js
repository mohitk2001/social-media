import React from "react";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import "./Register.css";
import { useHistory } from "react-router";
function Register() {
    const history=useHistory();
  return (
    <div className="register">
      <div className="register_content">
        <div className="register_top">
          <ExitToAppTwoToneIcon className="register_icon" />
          <h2>Register</h2>
        </div>
        <p>Join me and my friends on this great application!</p>
        <div className="register_inputs">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <button className="user_register_button">Register</button>
        <p>Already have an account? <strong onClick={()=>history.push("/login")}>Login</strong></p>
      </div>
    </div>
  );
}

export default Register;
