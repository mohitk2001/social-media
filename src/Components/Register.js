import React, { useState } from "react";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import "./Register.css";
import { useHistory } from "react-router";
import axios from "../Helpers/axios";
function Register() {
  const history = useHistory();
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = (e) => {
    e.preventDefault();
    const registerDetails={
      name:fullName,
      email:email,
      password:password
    }
    axios
      .post("/user/register",{registerDetails})
      .then((res) =>{
        alert(res.data.msg);
        history.push("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="register">
      <div className="register_content">
        <div className="register_top">
          <ExitToAppTwoToneIcon className="register_icon" />
          <h2>Register</h2>
        </div>
        <p>Join me and my friends on this great application!</p>
        <div className="register_inputs">
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="user_register_button" onClick={ registerUser}>
          Register
        </button>
        <p>
          Already have an account?{" "}
          <strong onClick={() => history.push("/login")}>Login</strong>
        </p>
      </div>
    </div>
  );
}

export default Register;
