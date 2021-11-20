import React from 'react'
import "./Thought.css"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@material-ui/icons/ThumbDownAltSharp';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
function Thought() {
    return (
        <div className="thought">
            <div className="thought_icon">
                <AccountCircleOutlinedIcon className="thought_icon_avatar"/>
                <strong>Name</strong>
            </div>
            <div className="thought_content">
                <p>My thought on full stack</p>
                <p>Date</p>
                <div className="access_buttons">
                    <button className="btn btn-success mx-2"><ThumbUpAltSharpIcon/> 0</button>
                    <button className="btn btn-danger mx-2"><ThumbDownAltSharpIcon/> 0</button>
                    <button className="btn btn-primary mx-2"><ChatRoundedIcon/> Dicussion</button>
                    <button className="btn btn-danger mx-2"><CloseSharpIcon/></button>
                </div>
            </div>
        </div>
    )
}

export default Thought
