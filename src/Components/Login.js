import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import axios from "../Helpers/axios";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    const loginDetails = {
      email: email,
      password: password,
    };
    axios
      .post("/user/login", { loginDetails })
      .then((res) =>{
        if(res.data.error){
          alert(res.data.error);
          history.push("/register")
        }
        else if(res.data.Comberror){
          alert(res.data.Comberror);
        }
        console.log(res)
        localStorage.setItem("tokenKey",res.data.token)
        history.push("/all_posts")
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="login">
      <div className="login_content">
        <div className="login_top">
          <ExitToAppTwoToneIcon className="login_icon" />
          <h2>Login</h2>
        </div>
        <p>Login to this awesome application</p>
        <div className="login_details">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="user_login_button" onClick={login}>
          LOGIN
        </button>
        <p>
          Don't have an account ?{" "}
          <strong
            onClick={() => {
              history.push("/register");
            }}
          >
            Register
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Login;
