import React from 'react'
import "./Header.css"
import { useHistory } from 'react-router'
function Header() {
    const history =useHistory();
    return (
        <div className="header_container">
            <div className="header">
            <h2 className="topHeader" onClick={()=>history.push("/")}>{"<"}/{">"} The Social Media App</h2>
            
            <div className="user_handle">
                <h2 onClick={()=>history.push("/login")}>Login </h2>
                <h2 onClick={()=>history.push("/register")}>Register </h2>
            </div>
        </div>
        </div>
    )
}

export default Header
