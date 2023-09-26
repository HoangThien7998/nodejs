import React from "react"
const SidebarNotifycations = () => {
    return (
        <>
            <div className="sidebar-header sidebar-nav-mini-hide">
                <span className="sidebar-header-options clearfix">
                    <a href="/#" data-toggle="tooltip" title="Refresh"><i className="gi gi-refresh" /></a>
                </span>
                <span className="sidebar-header-title">Activity</span>
            </div>
            <div className="sidebar-section sidebar-nav-mini-hide">
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
                    <i className="fa fa-bug fa-fw" /> <a href="/#"><strong>New bug
                        submitted</strong></a>
                </div>
            </div>
        </>
    )
}

export default SidebarNotifycations