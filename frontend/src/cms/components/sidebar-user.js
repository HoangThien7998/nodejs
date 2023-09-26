import React from "react"
const SidebarUser = () => {
    return (
        <div className="sidebar-section sidebar-user clearfix sidebar-nav-mini-hide">
            <div className="sidebar-user-avatar">
                <a href="page_ready_user_profile.html">
                    <img src="img/placeholders/avatars/avatar2.jpg" alt="avatar" />
                </a>
            </div>
            <div className="sidebar-user-name">John Doe</div>
            <div className="sidebar-user-links">
                <a href="page_ready_user_profile.html" data-toggle="tooltip" data-placement="bottom" title="Profile"><i className="gi gi-user" /></a>
                <a href="page_ready_inbox.html" data-toggle="tooltip" data-placement="bottom" title="Messages"><i className="gi gi-envelope" /></a>
                {/* Opens the user settings modal that can be found at the bottom of each page (page_footer.html in PHP version) */}
                <a href="/#" className="enable-tooltip" data-placement="bottom" title="Settings"><i className="gi gi-cogwheel" /></a>
                <a href="login.html" data-toggle="tooltip" data-placement="bottom" title="Logout"><i className="gi gi-exit" /></a>
            </div>
        </div>
    )
}
export default SidebarUser