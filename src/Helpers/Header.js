import React,{useEffect} from "react";
import "./Header.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {removeLoginStatus} from "../Redux/action/index"
function Header() {
  const history = useHistory();
  const tree_details = useSelector((state) => state.userReducer);
  const dispatch=useDispatch();
  const handleLogout=()=>{
      localStorage.removeItem("tokenKey")
      dispatch(removeLoginStatus(false))
  }
  useEffect(() => {
      console.log(tree_details)
  }, [tree_details.isLogged])
  return (
    <div className="header_container">
      <div className="header">
        <h2 className="topHeader" onClick={() => history.push("/")}>
          {"<"}/{">"} The Social Media App
        </h2>

        <div className="user_handle">
          {tree_details.isLogged ? (
            <>
              <h2>{tree_details.name}</h2>{" "}
              <button className="btn btn-danger mx-3" onClick={handleLogout}>Logout</button>
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
