import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(  
        <form action="index.html" method="post" id="form-login" className="form-horizontal form-bordered form-control-borderless">
            <div className="form-group">
                <div className="col-xs-12">
                    
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="gi gi-envelope" /></span>
                        <input type="text"   className="form-control input-lg" placeholder="Username" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
                        <input type="password" className="form-control input-lg" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="form-group form-actions">
                <div className="col-xs-4">
                    <label className="switch switch-primary" data-toggle="tooltip" title="Remember Me?">
                        <input type="checkbox" id="login-remember-me" name="login-remember-me" defaultChecked />
                        <span />
                    </label>
                </div>
                <div className="col-xs-8 text-right">
                    <button type="button"  className="btn btn-sm btn-primary"><i className="fa fa-angle-right" /> Login to Dashboard</button>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12 text-center">
                    <Link to="#" id="link-reminder-login"><small>Forgot password?</small></Link>&nbsp; - &nbsp;
                    <Link to="/auth/register" id="link-register-login"><small>Create a new account</small></Link>
                </div>
            </div>
        </form>
    )
}

export default Login