import React from 'react'
import "./Allposts.css"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Thought from '../Helpers/Thought';
function Allposts() {
    return (
        <div className="allposts">
            <div className="allposts_content">
                <h1> Welcome to a thriving tech community!</h1>
                <p>Discuss the latest technology and trends. Be civil and supportive!</p>
                <div className="post_input_box">
                    <div className="input_avatar">
                        <AccountCircleOutlinedIcon className="input_avatar_icon"/>
                    </div>
                    <div className="input_field">
                        {/* <input type="text" placeholder="Whats on your mind ?" /> */}
                        <textarea placeholder="Whats on your mind ?" ></textarea>
                    </div>
                </div>
                <button className="post_button"> POST</button>
                <Thought/>
            </div>
        </div>
    )
}

export default Allposts
