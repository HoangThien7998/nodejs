import React, { useState } from "react";
import { Link } from "react-router-dom";



function Register(){
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    rePassword: "",
  })

    return(
        <form action="login_full.html#register" method="post" id="form-register" className="form-horizontal form-bordered form-control-borderless">
        <div className="form-group">
          <div className="col-xs-6">
            <div className="input-group">
              <span className="input-group-addon"><i className="gi gi-user" /></span>
              <input type="text" id="register-firstname" onChange={e => setData({...data, firstName: e.target.value})} name="register-firstname" className="form-control input-lg" placeholder="Firstname" />
            </div>
          </div>
          <div className="col-xs-6">
            <input type="text" id="register-lastname"  onChange={e => setData({...data, lastName: e.target.value})} name="register-lastname" className="form-control input-lg" placeholder="Lastname" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="input-group">
              <span className="input-group-addon"><i className="gi gi-envelope" /></span>
              <input type="text" id="register-email" onChange={e => setData({...data, email: e.target.value})} name="register-email" className="form-control input-lg" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="input-group">
              <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
              <input type="password" id="register-password" onChange={e => setData({...data, password: e.target.value})} name="register-password" className="form-control input-lg" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="input-group">
              <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
              <input type="password" id="register-password-verify" onChange={e => setData({...data, rePassword: e.target.value})}  name="register-password-verify" className="form-control input-lg" placeholder="Verify Password" />
            </div>
          </div>
        </div>
        <div className="form-group form-actions">
          <div className="col-xs-6">
            <a href="#modal-terms" data-toggle="modal" className="register-terms">Terms</a>
            <label className="switch switch-primary" data-toggle="tooltip" title="Agree to the terms">
              <input type="checkbox" id="register-terms" name="register-terms" />
              <span />
            </label>
          </div>
          <div className="col-xs-6 text-right">
            <button type="submit" className="btn btn-sm btn-success"><i className="fa fa-plus" /> Register Account</button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12 text-center">
            <small>Do you have an account?</small> <Link to="#" id="link-register"><small>Login</small></Link>
          </div>
        </div>
      </form>
    )
}

export default Register