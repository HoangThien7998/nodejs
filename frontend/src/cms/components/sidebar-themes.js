/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
const SidebarTheme = () => {
    return (
        <ul className="sidebar-section sidebar-themes clearfix sidebar-nav-mini-hide">
            {/* You can also add the default color theme
          <li class="active">
              <a href="/#" class="themed-background-dark-default themed-border-default" data-theme="default" data-toggle="tooltip" title="Default Blue"></a>
          </li>
          */}
            <li>
                <a href="/#" className="themed-background-dark-night themed-border-night" data-theme="css/themes/night.css" data-toggle="tooltip" title="Night" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-amethyst themed-border-amethyst" data-theme="css/themes/amethyst.css" data-toggle="tooltip" title="Amethyst" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-modern themed-border-modern" data-theme="css/themes/modern.css" data-toggle="tooltip" title="Modern" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-autumn themed-border-autumn" data-theme="css/themes/autumn.css" data-toggle="tooltip" title="Autumn" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-flatie themed-border-flatie" data-theme="css/themes/flatie.css" data-toggle="tooltip" title="Flatie" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-spring themed-border-spring" data-theme="css/themes/spring.css" data-toggle="tooltip" title="Spring" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-fancy themed-border-fancy" data-theme="css/themes/fancy.css" data-toggle="tooltip" title="Fancy" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-fire themed-border-fire" data-theme="css/themes/fire.css" data-toggle="tooltip" title="Fire" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-coral themed-border-coral" data-theme="css/themes/coral.css" data-toggle="tooltip" title="Coral" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-lake themed-border-lake" data-theme="css/themes/lake.css" data-toggle="tooltip" title="Lake" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-forest themed-border-forest" data-theme="css/themes/forest.css" data-toggle="tooltip" title="Forest" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-waterlily themed-border-waterlily" data-theme="css/themes/waterlily.css" data-toggle="tooltip" title="Waterlily" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-emerald themed-border-emerald" data-theme="css/themes/emerald.css" data-toggle="tooltip" title="Emerald" />
            </li>
            <li>
                <a href="/#" className="themed-background-dark-blackberry themed-border-blackberry" data-theme="css/themes/blackberry.css" data-toggle="tooltip" title="Blackberry" />
            </li>
        </ul>
    )
}

export default SidebarTheme