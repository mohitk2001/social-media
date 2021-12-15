import React, { useEffect, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "./axios"
import { removeLoginStatus } from "../Redux/action/index";
function Header() {
  const history = useHistory();
  const [tree_details,setTree] = useState(useSelector((state) => state.addToken));
  const dispatch = useDispatch();
  useEffect(() => {
   console.log(tree_details)
  }, [tree_details.login]);
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("tokenKey");
  };
  return (
    <div className="header_container">
      <div className="header">
        <h2 className="topHeader" onClick={() => history.push("/")}>
          {"<"}/{">"} The Social Media App
        </h2>

        <div className="user_handle">
          {tree_details.login ? (
            <>
              <h2>{}</h2>{" "}
              <button className="btn btn-danger mx-3" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <h2 onClick={() => history.push("/login")}>Login </h2>
              <h2 onClick={() => history.push("/register")}>Register </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
