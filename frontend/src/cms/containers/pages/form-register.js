import React, { useState } from "react"
import { Link } from "react-router-dom"
import Config from "../../../config/Config"
import Errors from "../../components/error";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/userSlice";

const FormRegister = () => {
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    rePassword: "",
    phone: "",
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  let [errors, setErrors] = useState([])

  const handleChangeFirstName = (e) => {
    setData(prev => ({
      ...prev,
      firstName: e.target.value
    }))
  }
  const handleChangeLastName = (e) => {
    setData(prev => ({
      ...prev,
      lastName: e.target.value
    }))
  }
  const handleChangeEmail = (e) => {
    setData(prev => ({
      ...prev,
      email: e.target.value
    }))
  }
  const handleChangeUsername = (e) => {
    setData(prev => ({
      ...prev,
      username: e.target.value
    }))
  }
  const handleChangePhone = (e) => {
    setData(prev => ({
      ...prev,
      phone: e.target.value
    }))
  }
  const handleChangePassword = (e) => {
    setData(prev => ({
      ...prev,
      password: e.target.value
    }))
  }
  const handleChangeRePassword = (e) => {
    setData(prev => ({
      ...prev,
      rePassword: e.target.value
    }))
  }

  const registerOnSubmit = async () => {
    try {
      let res = await axios.post(`${Config.backendUrl}/cms/register`, data)
      if (res.status && res.status === 200 && res.data.user.username) {
        let user = {
          email: res.data.user.email,
          firstName: res.data.user.firstName,
          lastName: res.data.user.firstName,
          phone: res.data.user.phone,
          token: res.data.user.token,
          username: res.data.user.username,
        }
        // localStorage.setItem('user', JSON.stringify(user))
        dispatch(updateUser(user))
        return navigate("/")
      }
    } catch (error) {
      if (error.response.data.msg.errors) {
        setErrors(error.response.data.msg.errors)
      }
    }
  }

  let errorElement = errors.length === 0 ? "" : <Errors errors={errors} />

  return (
    <form className="form-horizontal form-bordered form-control-borderless">
      <div className="form-group">
        <div className="col-xs-12">
          {errorElement}
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-6">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-user" /></span>
            <input type="text" className="form-control input-lg" value={data.firstName} placeholder="Firstname" onChange={handleChangeFirstName} />
          </div>
        </div>
        <div className="col-xs-6">
          <input type="text" value={data.lastName} className="form-control input-lg" placeholder="Lastname" onChange={handleChangeLastName} />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-old_man" /></span>
            <input type="text" onChange={handleChangeUsername} value={data.username} className="form-control input-lg" placeholder="Username" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-envelope" /></span>
            <input type="text" onChange={handleChangeEmail} value={data.email} className="form-control input-lg" placeholder="Email" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-iphone_shake" /></span>
            <input type="text" onChange={handleChangePhone} value={data.phone} className="form-control input-lg" placeholder="Phone" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
            <input type="password" onChange={handleChangePassword} value={data.password} className="form-control input-lg" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
            <input type="password" onChange={handleChangeRePassword} value={data.rePassword} className="form-control input-lg" placeholder="Verify Password" />
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
          <button type="button" onClick={registerOnSubmit} className="btn btn-sm btn-success"><i className="fa fa-plus" /> Register Account</button>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12 text-center">
          <small>Do you have an account?</small> <Link to="/auth/login" id="link-register"><small>Login</small></Link>
        </div>
      </div>
    </form>
  )
}

export default FormRegister