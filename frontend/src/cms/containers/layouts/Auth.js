import TitleLogin from "../../components/title-login"
import React from "react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div>
            <div id="login-container" className="animation-fadeIn">
                <TitleLogin></TitleLogin>
                <div className="block push-bit">
                    <Outlet />
                </div>
            </div>
            {/* END Modal Terms */}
            {/* jQuery, Bootstrap.js, jQuery plugins and Custom JS code */}
            {/* Load and execute javascript code used only in this page */}
        </div>
    )
}

export default AuthLayout