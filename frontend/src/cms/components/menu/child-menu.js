import { Link } from "react-router-dom"
import React from "react"

const ChildMenu = ({child}) => {
    let activeClass = child.active ? "active" : ""
    return (
        <li>
            <Link to={child.link} className={activeClass}>{child.title}</Link>
        </li>
    )
}

export default ChildMenu