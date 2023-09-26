import React from "react"

const IndexPage = () => {

    return (
        <>
            {/* Dashboard Header */}
            {/* For an image header add the class 'content-header-media' and an image as in the following example */}
            <div className="content-header content-header-media">
                <div className="header-section">
                    <div className="row">
                        {/* Main Title (hidden on small devices for the statistics to fit) */}
                        <div className="col-md-4 col-lg-6 hidden-xs hidden-sm">
                            <h1>Welcome <strong>Admin</strong><br /><small>You Look Awesome!</small></h1>
                        </div>
                        {/* END Main Title */}
                        {/* Top Stats */}
                        <div className="col-md-8 col-lg-6">
                            <div className="row text-center">
                                <div className="col-xs-4 col-sm-3">
                                    <h2 className="animation-hatch">
                                        $<strong>93.7k</strong><br />
                                        <small><i className="fa fa-thumbs-o-up" /> Great</small>
                                    </h2>
                                </div>
                                <div className="col-xs-4 col-sm-3">
                                    <h2 className="animation-hatch">
                                        <strong>167k</strong><br />
                                        <small><i className="fa fa-heart-o" /> Likes</small>
                                    </h2>
                                </div>
                                <div className="col-xs-4 col-sm-3">
                                    <h2 className="animation-hatch">
                                        <strong>101</strong><br />
                                        <small><i className="fa fa-calendar-o" /> Events</small>
                                    </h2>
                                </div>
                                {/* We hide the last stat to fit the other 3 on small devices */}
                                <div className="col-sm-3 hidden-xs">
                                    <h2 className="animation-hatch">
                                        <strong>27° C</strong><br />
                                        <small><i className="fa fa-map-marker" /> Sydney</small>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* END Top Stats */}
                    </div>
                </div>
                {/* For best results use an image with a resolution of 2560x248 pixels (You can also use a blurred image with ratio 10:1 - eg: 1000x100 pixels - it will adjust and look great!) */}
                <img src="img/placeholders/headers/dashboard_header.jpg" alt="header imge" className="animation-pulseSlow" />
            </div>
            {/* END Dashboard Header */}
            {/* Mini Top Stats Row */}
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    {/* Widget */}
                    <a href="page_ready_article.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background-autumn animation-fadeIn">
                                <i className="fa fa-file-text" />
                            </div>
                            <h3 className="widget-content text-right animation-pullDown">
                                New <strong>Article</strong><br />
                                <small>Mountain Trip</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/* Widget */}
                    <a href="page_comp_charts.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background-spring animation-fadeIn">
                                <i className="gi gi-usd" />
                            </div>
                            <h3 className="widget-content text-right animation-pullDown">
                                + <strong>250%</strong><br />
                                <small>Sales Today</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/* Widget */}
                    <a href="page_ready_inbox.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background-fire animation-fadeIn">
                                <i className="gi gi-envelope" />
                            </div>
                            <h3 className="widget-content text-right animation-pullDown">
                                5 <strong>Messages</strong>
                                <small>Support Center</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/* Widget */}
                    <a href="page_comp_gallery.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background-amethyst animation-fadeIn">
                                <i className="gi gi-picture" />
                            </div>
                            <h3 className="widget-content text-right animation-pullDown">
                                +30 <strong>Photos</strong>
                                <small>Gallery</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
                <div className="col-sm-6">
                    {/* Widget */}
                    <a href="page_comp_charts.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background animation-fadeIn">
                                <i className="gi gi-wallet" />
                            </div>
                            <div className="pull-right">
                                {/* Jquery Sparkline (initialized in js/pages/index.js), for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-about */}
                                <span id="mini-chart-sales" />
                            </div>
                            <h3 className="widget-content animation-pullDown visible-lg">
                                Latest <strong>Sales</strong>
                                <small>Per hour</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
                <div className="col-sm-6">
                    {/* Widget */}
                    <a href="page_widgets_stats.html" className="widget widget-hover-effect1">
                        <div className="widget-simple">
                            <div className="widget-icon pull-left themed-background animation-fadeIn">
                                <i className="gi gi-crown" />
                            </div>
                            <div className="pull-right">
                                {/* Jquery Sparkline (initialized in js/pages/index.js), for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-about */}
                                <span id="mini-chart-brand" />
                            </div>
                            <h3 className="widget-content animation-pullDown visible-lg">
                                Our <strong>Brand</strong>
                                <small>Popularity over time</small>
                            </h3>
                        </div>
                    </a>
                    {/* END Widget */}
                </div>
            </div>
            {/* END Mini Top Stats Row */}
            {/* Widgets Row */}
            <div className="row">
                <div className="col-md-6">
                    {/* Timeline Widget */}
                    <div className="widget">
                        <div className="widget-extra themed-background-dark">
                            <div className="widget-options">
                                <div className="btn-group btn-group-xs">
                                    <a href="/#" className="btn btn-default" data-toggle="tooltip" title="Edit Widget"><i className="fa fa-pencil" /></a>
                                    <a href="/#" className="btn btn-default" data-toggle="tooltip" title="Quick Settings"><i className="fa fa-cog" /></a>
                                </div>
                            </div>
                            <h3 className="widget-content-light">
                                Latest <strong>News</strong>
                                <small><a href="page_ready_timeline.html"><strong>View all</strong></a></small>
                            </h3>
                        </div>
                        <div className="widget-extra">
                            {/* Timeline Content */}
                            <div className="timeline">
                                <ul className="timeline-list">
                                    <li className="active">
                                        <div className="timeline-icon"><i className="gi gi-airplane" /></div>
                                        <div className="timeline-time"><small>just now</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Jordan
                                                Carter</strong></a></p>
                                            <p className="push-bit">The trip was an amazing and a life changing
                                                experience!!</p>
                                            <p className="push-bit"><a href="page_ready_article.html" className="btn btn-xs btn-primary"><i className="fa fa-file" />
                                                Read the article</a></p>
                                            <div className="row push">
                                                <div className="col-sm-6 col-md-4">
                                                    <a href="img/placeholders/photos/photo1.jpg" data-toggle="lightbox-image">
                                                        <img src="img/placeholders/photos/photo1.jpg" alt="imae" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <a href="img/placeholders/photos/photo22.jpg" data-toggle="lightbox-image">
                                                        <img src="img/placeholders/photos/photo22.jpg" alt="imae" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="timeline-icon themed-background-fire themed-border-fire"><i className="fa fa-file-text" /></div>
                                        <div className="timeline-time"><small>5 min ago</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Administrator</strong></a>
                                            </p>
                                            <strong>Free courses</strong> for all our customers at A1 Conference
                                            Room - 9:00 <strong>am</strong> tomorrow!
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="timeline-icon"><i className="gi gi-drink" /></div>
                                        <div className="timeline-time"><small>3 hours ago</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Ella
                                                Winter</strong></a></p>
                                            <p className="push-bit"><strong>Happy Hour!</strong> Free drinks at <a href="/#">Cafe-Bar</a> all day long!</p>
                                            <div id="gmap-timeline" className="gmap" />
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="timeline-icon"><i className="fa fa-cutlery" /></div>
                                        <div className="timeline-time"><small>yesterday</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Patricia
                                                Woods</strong></a></p>
                                            <p className="push-bit">Today I had the lunch of my life! It was
                                                delicious!</p>
                                            <div className="row push">
                                                <div className="col-sm-6 col-md-4">
                                                    <a href="img/placeholders/photos/photo23.jpg" data-toggle="lightbox-image">
                                                        <img src="img/placeholders/photos/photo23.jpg" alt="imae" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="timeline-icon themed-background-fire themed-border-fire"><i className="fa fa-smile-o" /></div>
                                        <div className="timeline-time"><small>2 days ago</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Administrator</strong></a>
                                            </p>
                                            To thank you all for your support we would like to let you know that
                                            you will receive free feature updates for life! You are awesome!
                                        </div>
                                    </li>
                                    <li className="active">
                                        <div className="timeline-icon"><i className="fa fa-pencil" /></div>
                                        <div className="timeline-time"><small>1 week ago</small></div>
                                        <div className="timeline-content">
                                            <p className="push-bit"><a href="page_ready_user_profile.html"><strong>Nicole
                                                Ward</strong></a></p>
                                            <p className="push-bit">Consectetur adipiscing elit. Maecenas ultrices,
                                                justo vel imperdiet gravida, urna ligula hendrerit nibh, ac
                                                cursus nibh sapien in purus. Mauris tincidunt tincidunt turpis
                                                in porta. Integer fermentum tincidunt auctor. Vestibulum
                                                ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin
                                                orci, eget dictum leo mi nec lectus. Nam commodo turpis id
                                                lectus scelerisque vulputate.</p>
                                            Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed,
                                            tristique et lectus? Etiam egestas fringilla enim, id convallis
                                            lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut,
                                            interdum quis nisi. Quisque egestas nisl id lectus facilisis
                                            scelerisque? Proin rhoncus dui at ligula vestibulum ut facilisis
                                            ante sodales! Suspendisse potenti. Aliquam tincidunt sollicitudin
                                            sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus
                                            enim venenatis eget! Nulla quis ligula ipsum.
                                        </div>
                                    </li>
                                    <li className="text-center">
                                        <a href="/#" className="btn btn-xs btn-default">View
                                            more..</a>
                                    </li>
                                </ul>
                            </div>
                            {/* END Timeline Content */}
                        </div>
                    </div>
                    {/* END Timeline Widget */}
                </div>
                <div className="col-md-6">
                    {/* Your Plan Widget */}
                    <div className="widget">
                        <div className="widget-extra themed-background-dark">
                            <div className="widget-options">
                                <div className="btn-group btn-group-xs">
                                    <a href="/#" className="btn btn-default" data-toggle="tooltip" title="Edit Widget"><i className="fa fa-pencil" /></a>
                                    <a href="/#" className="btn btn-default" data-toggle="tooltip" title="Quick Settings"><i className="fa fa-cog" /></a>
                                </div>
                            </div>
                            <h3 className="widget-content-light">
                                Your <strong>VIP Plan</strong>
                                <small><a href="page_ready_pricing_tables.html"><strong>Upgrade</strong></a></small>
                            </h3>
                        </div>
                        <div className="widget-extra-full">
                            <div className="row text-center">
                                <div className="col-xs-6 col-lg-3">
                                    <h3>
                                        <strong>35</strong> <small>/50</small><br />
                                        <small><i className="fa fa-folder-open-o" /> Projects</small>
                                    </h3>
                                </div>
                                <div className="col-xs-6 col-lg-3">
                                    <h3>
                                        <strong>25</strong> <small>/100GB</small><br />
                                        <small><i className="fa fa-hdd-o" /> Storage</small>
                                    </h3>
                                </div>
                                <div className="col-xs-6 col-lg-3">
                                    <h3>
                                        <strong>65</strong> <small>/1k</small><br />
                                        <small><i className="fa fa-building-o" /> Clients</small>
                                    </h3>
                                </div>
                                <div className="col-xs-6 col-lg-3">
                                    <h3>
                                        <strong>10</strong> <small>k</small><br />
                                        <small><i className="fa fa-envelope-o" /> Emails</small>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END Your Plan Widget */}
                    {/* Charts Widget */}
                    <div className="widget">
                        <div className="widget-advanced widget-advanced-alt">
                            {/* Widget Header */}
                            <div className="widget-header text-center themed-background">
                                <h3 className="widget-content-light text-left pull-left animation-pullDown">
                                    <strong>Sales</strong> &amp; <strong>Earnings</strong><br />
                                    <small>Last Year</small>
                                </h3>
                                {/* Flot Charts (initialized in js/pages/index.js), for more examples you can check out http://www.flotcharts.org/ */}
                                <div id="dash-widget-chart" className="chart" />
                            </div>
                            {/* END Widget Header */}
                            {/* Widget Main */}
                            <div className="widget-main">
                                <div className="row text-center">
                                    <div className="col-xs-4">
                                        <h3 className="animation-hatch">
                                            <strong>7.500</strong><br /><small>Clients</small></h3>
                                    </div>
                                    <div className="col-xs-4">
                                        <h3 className="animation-hatch">
                                            <strong>10.970</strong><br /><small>Sales</small></h3>
                                    </div>
                                    <div className="col-xs-4">
                                        <h3 className="animation-hatch">
                                            $<strong>31.230</strong><br /><small>Earnings</small></h3>
                                    </div>
                                </div>
                            </div>
                            {/* END Widget Main */}
                        </div>
                    </div>
                    {/* END Charts Widget */}
                    {/* Weather Widget */}
                    <div className="widget">
                        <div className="widget-advanced widget-advanced-alt">
                            {/* Widget Header */}
                            <div className="widget-header text-left">
                                {/* For best results use an image with at least 150 pixels in height (with the width relative to how big your widget will be!) - Here I'm using a 1200x150 pixels image */}
                                <img src="img/placeholders/headers/widget5_header.jpg" alt="background" className="widget-background animation-pulseSlow" />
                                <h3 className="widget-content widget-content-image widget-content-light clearfix">
                                    <span className="widget-icon pull-right">
                                        <i className="fa fa-sun-o animation-pulse" />
                                    </span>
                                    Weather <strong>Station</strong><br />
                                    <small><i className="fa fa-location-arrow" /> The Mountain</small>
                                </h3>
                            </div>
                            {/* END Widget Header */}
                            {/* Widget Main */}
                            <div className="widget-main">
                                <div className="row text-center">
                                    <div className="col-xs-6 col-lg-3">
                                        <h3>
                                            <strong>10°</strong> <small>C</small><br />
                                            <small>Sunny</small>
                                        </h3>
                                    </div>
                                    <div className="col-xs-6 col-lg-3">
                                        <h3>
                                            <strong>80</strong> <small>%</small><br />
                                            <small>Humidity</small>
                                        </h3>
                                    </div>
                                    <div className="col-xs-6 col-lg-3">
                                        <h3>
                                            <strong>60</strong> <small>km/h</small><br />
                                            <small>Wind</small>
                                        </h3>
                                    </div>
                                    <div className="col-xs-6 col-lg-3">
                                        <h3>
                                            <strong>5</strong> <small>km</small><br />
                                            <small>Visibility</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* END Widget Main */}
                        </div>
                    </div>
                    {/* END Weather Widget*/}
                    {/* Advanced Gallery Widget */}
                    <div className="widget">
                        <div className="widget-advanced">
                            {/* Widget Header */}
                            <div className="widget-header text-center themed-background-dark">
                                <h3 className="widget-content-light clearfix">
                                    Awesome <strong>Gallery</strong><br />
                                    <small>4 Photos</small>
                                </h3>
                            </div>
                            {/* END Widget Header */}
                            {/* Widget Main */}
                            <div className="widget-main">
                                <a href="page_comp_gallery.html" className="widget-image-container">
                                    <span className="widget-icon themed-background"><i className="gi gi-picture" /></span>
                                </a>
                                <div className="gallery gallery-widget" data-toggle="lightbox-gallery">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-3">
                                            <a href="img/placeholders/photos/photo15.jpg" className="gallery-link" title="Image Info">
                                                <img src="img/placeholders/photos/photo15.jpg" alt="imge" />
                                            </a>
                                        </div>
                                        <div className="col-xs-6 col-sm-3">
                                            <a href="img/placeholders/photos/photo5.jpg" className="gallery-link" title="Image Info">
                                                <img src="img/placeholders/photos/photo5.jpg" alt="iage" />
                                            </a>
                                        </div>
                                        <div className="col-xs-6 col-sm-3">
                                            <a href="img/placeholders/photos/photo6.jpg" className="gallery-link" title="Image Info">
                                                <img src="img/placeholders/photos/photo6.jpg" alt="iage" />
                                            </a>
                                        </div>
                                        <div className="col-xs-6 col-sm-3">
                                            <a href="img/placeholders/photos/photo13.jpg" className="gallery-link" title="Image Info">
                                                <img src="img/placeholders/photos/photo13.jpg" alt="imge" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END Widget Main */}
                        </div>
                    </div>
                    {/* END Advanced Gallery Widget */}
                </div>
            </div>
            {/* END Widgets Row */}
        </>
    );
}

export default IndexPage