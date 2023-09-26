import { Link } from "react-router-dom"
import React from "react"

const FormForgetPass = () => {
    return (
        <form action="login_full.html#reminder" method="post" id="form-reminder" className="form-horizontal form-bordered form-control-borderless">
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="gi gi-envelope" /></span>
                        <input type="text" id="reminder-email" name="reminder-email" className="form-control input-lg" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="form-group form-actions">
                <div className="col-xs-12 text-right">
                    <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-angle-right" /> Reset Password</button>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12 text-center">
                    <small>Did you remember your password?</small> <Link to="/auth/login" id="link-reminder"><small>Login</small></Link>
                </div>
            </div>
        </form>
    )
}

export default FormForgetPass