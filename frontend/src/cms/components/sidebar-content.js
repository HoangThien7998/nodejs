import ChatUser from "./chat-users"
import React from "react"

const SidebarContent = () => {
    return (
        <div className="sidebar-content">
            {/* Chat */}
            {/* Chat demo functionality initialized in js/app.js -> chatUi() */}
            <a href="page_ready_chat.html" className="sidebar-title">
                <i className="gi gi-comments pull-right" /> <strong>Chat</strong>UI
            </a>
            {/* Chat Users */}
            <ChatUser/>
            {/* END Chat Users */}
            {/* Chat Talk */}
            <div className="chat-talk display-none">
                {/* Chat Info */}
                <div className="chat-talk-info sidebar-section">
                    <button id="chat-talk-close-btn" className="btn btn-xs btn-default pull-right">
                        <i className="fa fa-times" />
                    </button>
                    <img src="img/placeholders/avatars/avatar5.jpg" alt="avatar" className="img-circle pull-left" />
                    <strong>John</strong> Doe
                </div>
                {/* END Chat Info */}
                {/* Chat Messages */}
                <ul className="chat-talk-messages">
                    <li className="text-center"><small>Yesterday, 18:35</small></li>
                    <li className="chat-talk-msg animation-slideRight">Hey admin?</li>
                    <li className="chat-talk-msg animation-slideRight">How are you?</li>
                    <li className="text-center"><small>Today, 7:10</small></li>
                    <li className="chat-talk-msg chat-talk-msg-highlight themed-border animation-slideLeft">I'm
                        fine, thanks!</li>
                </ul>
                {/* END Chat Messages */}
                {/* Chat Input */}
                <form action="index.html" method="post" id="sidebar-chat-form" className="chat-form">
                    <input type="text" id="sidebar-chat-message" name="sidebar-chat-message" className="form-control form-control-borderless" placeholder="Type a message.." />
                </form>
                {/* END Chat Input */}
            </div>
            {/*  END Chat Talk */}
            {/* END Chat */}
            {/* Activity */}
            <a href="/#" className="sidebar-title">
                <i className="fa fa-globe pull-right" /> <strong>Activity</strong>UI
            </a>
            <div className="sidebar-section">
                <div className="alert alert-danger alert-alt">
                    <small>just now</small><br />
                    <i className="fa fa-thumbs-up fa-fw" /> Upgraded to Pro plan
                </div>
                <div className="alert alert-info alert-alt">
                    <small>2 hours ago</small><br />
                    <i className="gi gi-coins fa-fw" /> You had a new sale!
                </div>
                <div className="alert alert-success alert-alt">
                    <small>3 hours ago</small><br />
                    <i className="fa fa-plus fa-fw" /> <a href="page_ready_user_profile.html"><strong>John
                        Doe</strong></a> would like to become friends!<br />
                    <a href="/#" className="btn btn-xs btn-primary"><i className="fa fa-check" />
                        Accept</a>
                    <a href="/#" className="btn btn-xs btn-default"><i className="fa fa-times" />
                        Ignore</a>
                </div>
                <div className="alert alert-warning alert-alt">
                    <small>2 days ago</small><br />
                    Running low on space<br /><strong>18GB in use</strong> 2GB left<br />
                    <a href="page_ready_pricing_tables.html" className="btn btn-xs btn-primary"><i className="fa fa-arrow-up" /> Upgrade Plan</a>
                </div>
            </div>
            {/* END Activity */}
            {/* Messages */}
            <a href="page_ready_inbox.html" className="sidebar-title">
                <i className="fa fa-envelope pull-right" /> <strong>Messages</strong>UI (5)
            </a>
            <div className="sidebar-section">
                <div className="alert alert-alt">
                    Debra Stanley<small className="pull-right">just now</small><br />
                    <a href="page_ready_inbox_message.html"><strong>New Follower</strong></a>
                </div>
                <div className="alert alert-alt">
                    Sarah Cole<small className="pull-right">2 min ago</small><br />
                    <a href="page_ready_inbox_message.html"><strong>Your subscription was
                        updated</strong></a>
                </div>
                <div className="alert alert-alt">
                    Bryan Porter<small className="pull-right">10 min ago</small><br />
                    <a href="page_ready_inbox_message.html"><strong>A great opportunity</strong></a>
                </div>
                <div className="alert alert-alt">
                    Jose Duncan<small className="pull-right">30 min ago</small><br />
                    <a href="page_ready_inbox_message.html"><strong>Account Activation</strong></a>
                </div>
                <div className="alert alert-alt">
                    Henry Ellis<small className="pull-right">40 min ago</small><br />
                    <a href="page_ready_inbox_message.html"><strong>You reached 10.000
                        Followers!</strong></a>
                </div>
            </div>
            {/* END Messages */}
        </div>
    )
}

export default SidebarContent