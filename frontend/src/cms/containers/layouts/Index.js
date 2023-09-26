import React from "react"
import { Outlet,Navigate } from "react-router-dom"
import Footer from "../../components/footer";
import Header from "../../components/header";
import SidebarContent from "../../components/sidebar-content";
import SidebarNotifycations from "../../components/sidebar-notifycations";
import SidebarTheme from "../../components/sidebar-themes";
import SidebarUser from "../../components/sidebar-user";
import { useAuth } from "../../../authentication/useAuth";
import SidebarNav2 from "../../components/sidebar-nav.js";

const IndexLayout = () => {

    const user = useAuth();
    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div id="page-wrapper">
            {/* Preloader */}
            {/* Preloader functionality (initialized in js/app.js) - pageLoading() */}
            {/* Used only if page preloader is enabled from inc/config (PHP version) or the class 'page-loading' is added in #page-wrapper element (HTML version) */}
            <div className="preloader themed-background">
                <h1 className="push-top-bottom text-light text-center"><strong>Pro</strong>UI</h1>
                <div className="inner">
                    <h3 className="text-light visible-lt-ie9 visible-lt-ie10"><strong>Loading..</strong></h3>
                    <div className="preloader-spinner hidden-lt-ie9 hidden-lt-ie10" />
                </div>
            </div>
            {/* END Preloader */}
            {/* Page Container */}
            {/* In the PHP version you can set the following options from inc/config file */}
            <div id="page-container" className="sidebar-partial sidebar-visible-lg sidebar-no-animations">
                {/* Alternative Sidebar */}
                <div id="sidebar-alt">
                    {/* Wrapper for scrolling functionality */}
                    <div id="sidebar-alt-scroll">
                        {/* Sidebar Content */}
                        <SidebarContent />
                        {/* END Sidebar Content */}
                    </div>
                    {/* END Wrapper for scrolling functionality */}
                </div>
                {/* END Alternative Sidebar */}
                {/* Main Sidebar */}
                <div id="sidebar">
                    {/* Wrapper for scrolling functionality */}
                    <div id="sidebar-scroll">
                        {/* Sidebar Content */}
                        <div className="sidebar-content">
                            {/* Brand */}
                            <a href="index.html" className="sidebar-brand">
                                <i className="gi gi-flash" /><span className="sidebar-nav-mini-hide"><strong>Pro</strong>UI</span>
                            </a>
                            {/* END Brand */}
                            {/* User Info */}
                            <SidebarUser />
                            {/* END User Info */}
                            {/* Theme Colors */}
                            {/* Change Color Theme functionality can be found in js/app.js - templateOptions() */}
                            <SidebarTheme />
                            {/* END Theme Colors */}
                            {/* Sidebar Navigation */}
                            <SidebarNav2 />
                            {/* END Sidebar Navigation */}
                            {/* Sidebar Notifications */}
                            <SidebarNotifycations />
                            {/* END Sidebar Notifications */}
                        </div>
                        {/* END Sidebar Content */}
                    </div>
                    {/* END Wrapper for scrolling functionality */}
                </div>
                {/* END Main Sidebar */}
                {/* Main Container */}
                <div id="main-container">
                    {/* Header */}
                    {/* In the PHP version you can set the following options from inc/config file */}
                    {/*
                          Available header.navbar classes:
  
                          'navbar-default'            for the default light header
                          'navbar-inverse'            for an alternative dark header
  
                          'navbar-fixed-top'          for a top fixed header (fixed sidebars with scroll will be auto initialized, functionality can be found in js/app.js - handleSidebar())
                              'header-fixed-top'      has to be added on #page-container only if the class 'navbar-fixed-top' was added
  
                          'navbar-fixed-bottom'       for a bottom fixed header (fixed sidebars with scroll will be auto initialized, functionality can be found in js/app.js - handleSidebar()))
                              'header-fixed-bottom'   has to be added on #page-container only if the class 'navbar-fixed-bottom' was added
                      */}
                    <Header />
                    {/* END Header */}
                    {/* Page content */}
                    <div id="page-content">
                        <Outlet />
                    </div>
                    {/* END Page Content */}
                    {/* Footer */}
                    <Footer />
                    {/* END Footer */}
                </div>
                {/* END Main Container */}
            </div>
            {/* END Page Container */}
        </div>
    );
}

export default IndexLayout