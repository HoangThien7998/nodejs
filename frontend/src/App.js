import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AuthLayout from './cms/containers/layouts/Auth'
import Register from "./cms/containers/pages/Register";
import Login from "./cms/containers/pages/Login";


function App(){
  return (
    <Router>
        <Routes>
            <Route path='auth' element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route exact path='login' element={<Login />} />
                <Route exact path='register' element={<Register />} />
                {/* <Route exact path='forget' element={<FormForgetPass />} /> */}
            </Route>
            {/* <Route path='/' element={<IndexLayout />}>
                <Route index element={<IndexPage />} />
                    
            </Route> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
)
}


export default App