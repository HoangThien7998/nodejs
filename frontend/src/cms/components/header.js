import React from "react"

const Header = () => {
    return (
        <header className="navbar navbar-default">
            {/* Left Header Navigation */}
            <ul className="nav navbar-nav-custom">
                {/* Main Sidebar Toggle Button */}
                <li>
                    <a href="/#" >
                        <i className="fa fa-bars fa-fw" />
                    </a>
                </li>
                {/* END Main Sidebar Toggle Button */}
                {/* Template Options */}
                {/* Change Options functionality can be found in js/app.js - templateOptions() */}
                <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="gi gi-settings" />
                    </a>
                    <ul className="dropdown-menu dropdown-custom dropdown-options">
                        <li className="dropdown-header text-center">Header Style</li>
                        <li>
                            <div className="btn-group btn-group-justified btn-group-sm">
                                <a href="/#" className="btn btn-primary" id="options-header-default">Light</a>
                                <a href="/#" className="btn btn-primary" id="options-header-inverse">Dark</a>
                            </div>
                        </li>
                        <li className="dropdown-header text-center">Page Style</li>
                        <li>
                            <div className="btn-group btn-group-justified btn-group-sm">
                                <a href="/#" className="btn btn-primary" id="options-main-style">Default</a>
                                <a href="/#" className="btn btn-primary" id="options-main-style-alt">Alternative</a>
                            </div>
                        </li>
                    </ul>
                </li>
                {/* END Template Options */}
            </ul>
            {/* END Left Header Navigation */}
            {/* Search Form */}
            <form action="page_ready_search_results.html" method="post" className="navbar-form-custom">
                <div className="form-group">
                    <input type="text" id="top-search" name="top-search" className="form-control" placeholder="Search.." />
                </div>
            </form>
            {/* END Search Form */}
            {/* Right Header Navigation */}
            <ul className="nav navbar-nav-custom pull-right">
                {/* Alternative Sidebar Toggle Button */}
                <li>
                    {/* If you do not want the main sidebar to open when the alternative sidebar is closed, just remove the second parameter: App.sidebar('toggle-sidebar-alt'); */}
                    <a href="/#">
                        <i className="gi gi-share_alt" />
                        <span className="label label-primary label-indicator animation-floating">4</span>
                    </a>
                </li>
                {/* END Alternative Sidebar Toggle Button */}
                {/* User Dropdown */}
                <li className="dropdown">
                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="img/placeholders/avatars/avatar2.jpg" alt="avatar" /> <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
                        <li className="dropdown-header text-center">Account</li>
                        <li>
                            <a href="page_ready_timeline.html">
                                <i className="fa fa-clock-o fa-fw pull-right" />
                                <span className="badge pull-right">10</span>
                                Updates
                            </a>
                            <a href="page_ready_inbox.html">
                                <i className="fa fa-envelope-o fa-fw pull-right" />
                                <span className="badge pull-right">5</span>
                                Messages
                            </a>
                            <a href="page_ready_pricing_tables.html"><i className="fa fa-magnet fa-fw pull-right" />
                                <span className="badge pull-right">3</span>
                                Subscriptions
                            </a>
                            <a href="page_ready_faq.html"><i className="fa fa-question fa-fw pull-right" />
                                <span className="badge pull-right">11</span>
                                FAQ
                            </a>
                        </li>
                        <li className="divider" />
                        <li>
                            <a href="page_ready_user_profile.html">
                                <i className="fa fa-user fa-fw pull-right" />
                                Profile
                            </a>
                            {/* Opens the user settings modal that can be found at the bottom of each page (page_footer.html in PHP version) */}
                            <a href="#modal-user-settings" data-toggle="modal">
                                <i className="fa fa-cog fa-fw pull-right" />
                                Settings
                            </a>
                        </li>
                        <li className="divider" />
                        <li>
                            <a href="page_ready_lock_screen.html"><i className="fa fa-lock fa-fw pull-right" />
                                Lock Account</a>
                            <a href="login.html"><i className="fa fa-ban fa-fw pull-right" /> Logout</a>
                        </li>
                        <li className="dropdown-header text-center">Activity</li>
                        <li>
                            <div className="alert alert-success alert-alt">
                                <small>5 min ago</small><br />
                                <i className="fa fa-thumbs-up fa-fw" /> You had a new sale ($10)
                            </div>
                            <div className="alert alert-info alert-alt">
                                <small>10 min ago</small><br />
                                <i className="fa fa-arrow-up fa-fw" /> Upgraded to Pro plan
                            </div>
                            <div className="alert alert-warning alert-alt">
                                <small>3 hours ago</small><br />
                                <i className="fa fa-exclamation fa-fw" /> Running low on space<br /><strong>18GB in
                                    use</strong> 2GB left
                            </div>
                            <div className="alert alert-danger alert-alt">
                                <small>Yesterday</small><br />
                                <i className="fa fa-bug fa-fw" /> <a href="/#" className="alert-link">New bug submitted</a>
                            </div>
                        </li>
                    </ul>
                </li>
                {/* END User Dropdown */}
            </ul>
            {/* END Right Header Navigation */}
        </header>
    )
}

export default Header