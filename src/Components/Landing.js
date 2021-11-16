import React from 'react'
import Header from '../Helpers/Header'
import "./Landing.css"
function Landing() {
    return (
        <div className="landing">
            <Header/>
            <div className="landing_comp">
                <div className="color_overlay">
                    <h1>The Social Media App</h1>
                    <p>A fun place for devlopers and friends to share ideas on technolgy . Plenty of cool discussions !</p>
                    <div className="handle_button">
                        <button className="landing_register">REGISTER</button>
                        <button className="landing_login">LOGIN</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Landing
