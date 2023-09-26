import { Link } from "react-router-dom"
import React from "react"

const Breadcrum = ({currentPage}) => {
    return (
        <ul className="breadcrumb breadcrumb-top">
            <li><Link to="/">Dashboard</Link></li>
            <li>{currentPage}</li>
        </ul>
    )
}

export default Breadcrum