/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import React from 'react'
import ChildMenu from './child-menu'

const DropdownMenu = ({ updateStatusMenu,menu }) => {
    let [classActive, setClassActive] = useState({
        classOpen: "sidebar-nav-menu",
        displayDropdown: "none"
    })

    let childs = menu.list.map((e, i) => {
        return <ChildMenu child={e} key={i} />
    })

    const handleOpen = () => {
        menu.active = !menu.active
        updateStatusMenu(menu)
        handleChangeClassActive(menu)
        return false
    }

    function handleChangeClassActive(menu){
        if(menu.active){
            setClassActive({
                classOpen: "sidebar-nav-menu open",
                displayDropdown: "block"
            })
        }else{
            setClassActive({
                classOpen: "sidebar-nav-menu",
                displayDropdown: "none"
            })
        }
    }

    return (
        <li>
            <a href="#" className={classActive.classOpen} onClick={handleOpen}>
                <i className={menu.iconHideClass}></i>
                <i className={menu.iconClass}></i>
                <span className="sidebar-nav-mini-hide">{menu.title}</span>
            </a>
            <ul style={{display: `${classActive.displayDropdown}`}}>
                {childs}
            </ul>
        </li>
    )
}
export default DropdownMenu