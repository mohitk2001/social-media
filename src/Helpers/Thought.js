import React from 'react'
import "./Thought.css"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function Thought() {
    return (
        <div className="thought">
            <div className="thought_icon">
                <AccountCircleOutlinedIcon/>
            </div>
            <div className="thought_content">
                <p>My thought on full stack</p>
            </div>
        </div>
    )
}

export default Thought
