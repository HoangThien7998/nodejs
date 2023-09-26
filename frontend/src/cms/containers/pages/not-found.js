import React from "react"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="error-container">
            <div className="error-options">
                <h3><i className="fa fa-chevron-circle-left text-muted" /> <Link to="/auth">Go Back</Link></h3>
            </div>
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <h1 className="animation-pulse"><i className="fa fa-exclamation-circle text-warning" /> 404</h1>
                    <h2 className="h3">Oops, we are sorry but the page you are looking for was not found..<br />But do not worry, we will have a look into it..</h2>
                </div>
                <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">

                </div>
            </div>
        </div>
    );
}

export default NotFound