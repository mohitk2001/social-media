import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header_container">
            <div className="header">
            <h2>{"<"}/{">"} The Social Media App</h2>
            <div className="user_handle">
                <h2>Login </h2>
                <h2>Register </h2>
            </div>
        </div>
        </div>
    )
}

export default Header
