import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Errors from '../../components/error';
import axios from "axios"
import Config from '../../../config/Config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/userSlice';

const FormLogin = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let [data, setData] = useState({
        username: "",
        password: ""
    })

    let [errors, setErrors] = useState([])

    let handleChangeUsername = (e) => {
        setData(prev => ({
            ...prev,
            username: e.target.value
        }))
    }

    let handleChangePassword = (e) => {
        setData(prev => ({
            ...prev,
            password: e.target.value
        }))
    }

    let submitLogin = async () => {
        let res = await checkLogin()
        if (res && !res.error) {
            dispatch(updateUser(res.data.response))
            localStorage.setItem('user', JSON.stringify(res.data.response))
            return navigate("/")
        }
        return
    }

    async function checkLogin() {
        let error = false
        if (data.username === "") {
            error = true
            setErrors([{ message: "Username can't empty" }])
        }
        if (data.password === "" && error === false) {
            error = true
            setErrors([{ message: "Password can't empty" }])
        }
        if (!error) {
            try{
                let res = await axios.post(`${Config.backendUrl}/cms/login`, data)
                if (res.status && res.status === 200 && res.data.response.username) {
                    // localStorage.setItem('user', JSON.stringify(res.data.response));
                    return res;
                }
            }catch(err){
                if (err.response.data.msg && err.response.data.status !== 200) {
                    setErrors([{ message: err.response.data.msg }])
                }
            }
        }
    }

    let errorElement
    if (errors.length > 0) {
        errorElement = <Errors errors={errors} />
    }

    return (
        <form action="index.html" method="post" id="form-login" className="form-horizontal form-bordered form-control-borderless">
            <div className="form-group">
                <div className="col-xs-12">
                    {errorElement}
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="gi gi-envelope" /></span>
                        <input type="text" value={data.username} onChange={handleChangeUsername} className="form-control input-lg" placeholder="Username" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
                        <input type="password" value={data.password} onChange={handleChangePassword} className="form-control input-lg" placeholder="Password" />
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
                    <button type="button" onClick={submitLogin} className="btn btn-sm btn-primary"><i className="fa fa-angle-right" /> Login to Dashboard</button>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12 text-center">
                    <Link to="/auth/forget" id="link-reminder-login"><small>Forgot password?</small></Link>&nbsp; - &nbsp;
                    <Link to="/auth/register" id="link-register-login"><small>Create a new account</small></Link>
                </div>
            </div>
        </form>
    )
}

export default FormLogin